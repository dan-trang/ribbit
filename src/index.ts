<<<<<<< HEAD
import "reflect-metadata";
=======
>>>>>>> 28bef2bd78a4fd37d2547269b773f6690c3e9398
import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";
<<<<<<< HEAD
import express from 'express'
import {ApolloServer} from 'apollo-server-express'
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";

const main = async () => {
    //this is database connection
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up();
    
    // const post = orm.em.create(Post, {title: "my first post!"});
    // await orm.em.persistAndFlush(post);
    // const posts = await orm.em.find(Post, {});
    // console.log(posts);

    const app = express();
    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [HelloResolver, PostResolver],
            validate: false
        }), 
        context: () => ({ em: orm.em }),
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });

    //testing endpoint 
    // app.get('/', (_, res) => {
    //     res.send("hallo, test...test...");
    // });

    app.listen(4000, () => {
        console.log('server started on localhost:4000');
    });
=======

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    orm.getMigrator().up();
    // const post = orm.em.create(Post, {title: 'my first post'});
    // await orm.em.persistAndFlush(post);

    // const posts = await orm.em.find(Post, {});
    // console.log(posts);
>>>>>>> 28bef2bd78a4fd37d2547269b773f6690c3e9398
};

main().catch((err) => {
    console.error(err);
});

