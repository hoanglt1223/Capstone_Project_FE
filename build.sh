echo "Start building..."

# yarn build
if [[ ! -e app/build/index.html ]]
then
    echo "There is no index.html, run script:"
    echo "--- yarn build ---"
    yarn build
fi

# copy build files to app
cp -r build app/build

# copy eletron files to app
cp -r electron app/electron

# yarn dist:electron
echo "Cooking App... ^_^"
yarn dist:electron

# clear app/
rm -rv app/build
rm -rv app/electron

echo "--- Finish Build :) ---"
