import React from "react";

const Blogs = () => {
  return (
    <div className="p-8">
      <div className="mt-3 mb-3 rounded">
        <h1 className="text-4xl mb-2"> 1. Difference between SQL and NoSQL </h1>
        <ul className="text-xl mt-2">
          <p>
            <strong>
              The five critical differences between SQL vs NoSQL are:
            </strong>
          </p>
          <li>
            SQL databases are relational, NoSQL databases are non-relational.
          </li>
          <li>
            SQL databases use structured query language and have a predefined
            schema. NoSQL databases have dynamic schemas for unstructured data.
          </li>
          <li>
            SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable.
          </li>
          <li>
            SQL databases are table-based, while NoSQL databases are document,
            key-value, graph, or wide-column stores.
          </li>
          <li>
            SQL databases are better for multi-row transactions, while NoSQL is
            better for unstructured data like documents or JSON.
          </li>
        </ul>
      </div>
      <div className="mt-3 mb-3 rounded">
        <h1 className="text-4xl mb-2">What is JWT, and how does it work?</h1>
        <p className="text-xl mt-2">
          For beginning developers, JSON stands for JavaScript Object Notation
          and is a text-based format for transmitting data across web
          applications. It stores information in an easy-to-access manner, both
          for developers and computers. It can be used as a data format by any
          programming language and is quickly becoming the preferred syntax for
          APIs, surpassing XML.Now that you understand JSON as a data text
          format, you may be wondering What are tokens? To put it simply, a
          token is a string of data that represents something else, such as an
          identity. In the case of authentication, a non-JWT based token is a
          string of characters that allow the receiver to validate the sender’s
          identity. The important distinction here is lack of meaning within the
          characters themselves.
        </p>
      </div>
      <div className="mt-3 mb-3 rounded">
        <h1 className="text-4xl mb-2">
          What is the difference between javascript and NodeJS?
        </h1>
        <p className="text-xl mt-2">
          JavaScript is a client-side scripting language that is lightweight,
          cross-platform, and interpreted. Both Java and HTML include it.
          Node.js, on the other hand, is a V8-based server-side programming
          language.JavaScript is a simple programming language that can be used
          with any browser that has the JavaScript Engine installed. Node.js, on
          the other hand, is an interpreter or execution environment for the
          JavaScript programming language. It requires libraries that can be
          conveniently accessed from JavaScript programming to be more helpful.
          A specific non-blocking operation is required to access any operating
          system. There are a few essential objects in JavaScript, but they are
          entirely OS-specific.
        </p>
      </div>
      <div className="mt-3 mb-3 rounded">
        <h1 className="text-4xl mb-2">
          How does NodeJS handle multiple requests at the same time?
        </h1>
        <p className="text-xl mt-2">
          How NodeJS handle multiple client requests? NodeJS receives multiple
          client requests and places them into EventQueue. NodeJS is built with
          the concept of event-driven architecture. NodeJS has its own EventLoop
          which is an infinite loop that receives requests and processes them
        </p>
      </div>
    </div>
  );
};

export default Blogs;
