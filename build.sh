rm -r _site/ || true

# Change directory to images
cd images

# Loop through each directory
for dir in */
do
echo "Processing $dir directory"

cd $dir

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

cd ..
done

# Change directory back to home
cd ..

# Build website
bundle check || bundle install
bundle exec jekyll build
bundle exec htmlproofer ./_site --allow-hash-href --check-html --disable-external

# Remove generated thumbnail images from working directory
cd images
find . -name "thumbnail-*" -type f -delete

# Channge directory back to home
cd ..

# Start webserver
http-server _site