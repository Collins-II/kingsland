import { PostDataType } from "@/data/types";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";
import Link from "next/link";
import { Route } from "next";
import Image from "next/image";
import Badge from "@/shared/Badge";
import { DEMO_POSTS } from "@/data/posts";
import PostSlider from "./blogSlider";
import BlogSlider from "./blogSlider";

const postsDemo: PostDataType[] = DEMO_POSTS.filter((_, i) => i > 7 && i < 14);

const Blog = () => {

  const renderPostRelated = (post: PostDataType) => {
    return (
      <div
        key={post.id}
        className="relative aspect-w-3 aspect-h-4 rounded-3xl overflow-hidden group"
      >
        <Link href={post.href as Route} />
        <Image
          className="object-cover transform group-hover:scale-105 transition-transform duration-300"
          src={post.featuredImage}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          alt=""
        />
        <div>
          <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black"></div>
        </div>
        <div className="flex flex-col justify-end items-start text-xs text-gold space-y-2.5 p-4">
          <Badge color="yellow" name={post.postType?.toUpperCase()} />
          <h2 className="block text-lg font-semibold text-white ">
            <span className="line-clamp-2">{post.title}</span>
          </h2>

          <div className="flex">
            <span className="block text-neutral-200 hover:text-white font-medium truncate">
              {post.author.displayName}
            </span>
            <span className="mx-1.5 font-medium">·</span>
            <span className="font-normal truncate">{post.date}</span>
          </div>
        </div>
        <Link href={post.href as Route} />
      </div>
    );
  };


  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-4 md:py-12 lg:py-16"
    >
      <div className="">
        <div>
          <h2 className="text-2xl font-semibold text-silverGray">Our Latest Blogs</h2>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            {`Find homes you can afford.`}
          </span>
        </div>
        <div className="w-50 border-b border-neutral-200 dark:border-neutral-700 my-8"></div>
        <BlogSlider />
      </div>
    </section>
  );
};

export default Blog;
