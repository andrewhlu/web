rm -r _site/ || true
cd images/projects
# Thumbnails for all JPGs
for i in *.jpg
do
convert -thumbnail 400 $i thumbnail-$i || true
echo $i processed
done
# Thumbnails for all PNGs
for i in *.png
do
convert -thumbnail 400 $i thumbnail-$i || true
echo $i processed
done
cd ../..
bundle check || bundle install
bundle exec jekyll build
bundle exec htmlproofer ./_site --allow-hash-href --check-html --disable-external
cd images/projects
rm thumbnail-*
cd ../../_site
http-server