# pickpack

## Install docker images:
```bash
docker pull postgres:15
docker pull hasura/graphql-engine:v2.42.0
docker pull hasura/graphql-data-connector:v2.42.0
```

## Install hasura cli - Mac/Unix
```bash
curl -L https://github.com/hasura/graphql-engine/raw/stable/cli/get.sh | bash
```

## Install hasura cli - Windows
go to https://github.com/hasura/graphql-engine/releases

## set node and yarn
```bash
nvm use 22.14.0
yarn set version classic
```

## load env variables
```bash
source ./scripts/load_env.sh
```



