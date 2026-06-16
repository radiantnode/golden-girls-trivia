#!/usr/bin/env bash
#
# Append a ?v=<version> query string to the asset URLs in index.html so each
# deploy serves uniquely-versioned URLs. GitHub Pages caches assets with
# max-age=600, so without this browsers keep stale JS/CSS for up to 10 minutes
# after a deploy.
#
# Runs at build time inside the Pages workflow; it only edits the deployed
# copy, so the committed index.html keeps plain filenames and opening it
# locally still works. Lives under .github/ which the Pages artifact excludes,
# so this script is never published.
set -euo pipefail

v="${GITHUB_SHA:-$(date +%s)}"

sed -i \
  -e "s|href=\"styles.css\"|href=\"styles.css?v=${v}\"|" \
  -e "s|src=\"questions.js\"|src=\"questions.js?v=${v}\"|" \
  -e "s|src=\"app.js\"|src=\"app.js?v=${v}\"|" \
  index.html

echo "::group::Cache-bust result (v=${v})"
grep -nE "styles\.css|questions\.js|app\.js" index.html
echo "::endgroup::"

# Fail loudly if the substitution did not take effect, so a silent no-op can
# never ship again.
if ! grep -q "?v=${v}" index.html; then
  echo "ERROR: cache-busting did not apply to index.html" >&2
  exit 1
fi
