list:
    @just --list

install:
    @just install_ubuntu

install_ubuntu:
    npm i
    composer install
    wget https://github.com/watchexec/watchexec/releases/download/v2.2.0/watchexec-2.2.0-aarch64-unknown-linux-gnu.deb
    sudo dpkg -i watchexec-2.2.0-x86_64-unknown-linux-gnu.deb
    sudo apt install -f jq

up:
    docker compose up -d
    npm i
    composer i
    php artisan migrate
    npx concurrently  -c \"#93c5fd,#c4b5fd,#fb7185,#fdba74\" "npm run dev" "watchexec -e .php -c -r 'php artisan horizon'" "tail -f storage/logs/laravel.log | jq" "php artisan pail" --names=vite,horizon,logs,pail

build:
    npm run build
    php artisan optimize
    php artisan config:cache
    php artisan event:cache
    php artisan route:cache
    php artisan view:cache

clear_cache:
    php artisan optimize:clear
    php artisan config:clear
    php artisan event:clear
    php artisan route:clear
    php artisan view:clear

