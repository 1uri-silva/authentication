FROM node:20.12.2 as base

RUN npm i -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm i

FROM base as build

WORKDIR /app

COPY . .
COPY --from=base /app/node_modules ./node_modules

RUN pnpm prisma generate
RUN pnpm build
RUN pnpm prune --prod

FROM node:20-alpine3.19 as deploy

WORKDIR /app

RUN npm i -g pnpm prisma

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/prisma ./prisma 

EXPOSE 3000

CMD [ "pnpm", "start" ]
