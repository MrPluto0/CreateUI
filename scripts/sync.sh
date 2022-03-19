set -e

msg=${1}

git add .
git commit -m "${msg}"
git push origin docs