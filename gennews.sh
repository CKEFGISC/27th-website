#!/bin/bash

filepath=/news/posts/$1
cp ./news/template.html .$filepath.html
sed -i "" "s#</body>#<script>loadNews('$filepath.txt')</script>\n</body>#g" .$filepath.html
sed -i "" "1s#^#$filepath.txt\n#" ./news/data/filepaths.txt

