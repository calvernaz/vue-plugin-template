set -e

yes "" | ./node_modules/.bin/vue init . test

cd test
npm install

cd .. ; rm -rf test
