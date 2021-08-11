import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
<<<<<<< HEAD
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Post {
  @Field(() => Int) 
  @PrimaryKey()
  id!: number;

  @Field(() => String)
  @Property({ type: "date" })
  createdAt = new Date();

  @Field(() => String)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();

  @Field()  //comment out field to 'hide' this property
=======

@Entity()
export class Post {

  @PrimaryKey()
  id!: number;

  @Property({ type: "date" })
  createdAt = new Date();

  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt = new Date();

>>>>>>> 28bef2bd78a4fd37d2547269b773f6690c3e9398
  @Property({ type: "text" })
  title!: string;
}