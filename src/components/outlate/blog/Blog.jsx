const Blog = () => {
  return (
    <div className=''>
      <div className='w-full h-screen bg-[#F6E1E1] px-12 py-5 overflow-x-hidden'>
        <div className='pb-10'>
          <h2 className='text-2xl uppercase font-semibold mb-2'>
            Differences between SQL and NoSQL:
          </h2>
          <hr className='border border-cyan-600 mb-5' />
          <div>
            <p>
              Structured Query language (SQL) pronounced as “S-Q-L” or sometimes
              as “See-Quel” is the standard language for dealing with Relational
              Databases. A relational database defines relationships in the form
              of tables.
            </p>
            <ul className='pt-3'>
              <li>
                0.SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called
                RDBMS or Relational Databases, whereas NoSQL is a Non-relational
                or Distributed Database.
              </li>
              <br />
              <li>
                1.Comparing SQL vs NoSQL databases, SQL databases are
                table-based databases, whereas NoSQL databases can be
                document-based, key-value pairs, and graph databases.
              </li>{' '}
              <br />
              <li>
                2.SQL databases are vertically scalable, while NoSQL databases
                are horizontally scalable.
              </li>{' '}
              <br />
              <li>
                3.SQL databases have a predefined schema, whereas NoSQL
                databases use a dynamic schema for unstructured data.
              </li>{' '}
              <br />
              <li>
                4.Comparing NoSQL vs SQL performance, SQL requires specialized
                DB hardware for better performance while NoSQL uses commodity
                hardware.
              </li>
            </ul>
          </div>
        </div>
        <div className='pb-10'>
          <h2 className='text-2xl font-semibold mb-2'>
            What Are Refresh Tokens and How to Use Them Securely:
          </h2>
          <hr className='border border-cyan-600 mb-5' />
          <p>
            That is, a refresh token is a credential artifact that lets a client
            application get new access tokens without having to ask the user to
            log in
          </p>
          <br />
          <br />
          <p>
            1. This is a guest post by Pius Aboyi. If you want to learn more
            about how to manage sessions with refresh tokens, read this blog. If
            you don’t want to have to write all this code, you can simply use
            Passage to integrate passwordless authentication into your app, and
            have them handle all the details for your app. ‍
          </p>
          <p>
            2. A refresh token is a special key that enables a client for an API
            or service to retrieve new access tokens without requiring the user
            to perform a complete login. In other words, an application can
            exchange a valid refresh token for a new access token. In addition
            to the new access token, the service may return a new refresh token
            too.
          </p>
          <p>
            3. Why do refresh tokens matter, and does a client need to exchange
            them for a new access token? The main reason why refresh tokens
            exist is because most access tokens don't live forever. That is to
            say, an access token may expire after a specific period of time like
            a few hours or days. Hence, in order to avoid requesting that the
            client perform an activity like entering a username and password to
            retrieve a new access token, you can use refresh tokens to get a new
            access token.
            <pre>...............</pre>
          </p>
          <p>
            4.To answer the above question, let me explain further why access
            tokens usually have an expiration time. In a situation where a
            malicious user gets a hold of a valid access token, they can make
            requests on behalf of a user and access protected data. As a result,
            access tokens expire after some time and become invalid. Refresh
            tokens, on the other hand, live longer so that your application can
            make use of it to retrieve a new access token.
          </p>
          <p>
            5.By defining prop types using PropTypes, you can catch potential
            errors and validate the props being passed to your components, which
            helps in maintaining code quality and reducing bugs.
          </p>
        </div>
        <div className='pb-10'>
          <h2 className='text-2xl font-semibold mb-2'>
            = Express vs Nest = .JS :
          </h2>
          <hr className='border border-cyan-600 mb-5' />
          <p>
            Express is a minimalist and flexible framework that is easy to use
            and has a large community of developers. NestJS, on the other hand,
            is a newer framework that provides additional features such as
            dependency injection, a modular architecture, and an intuitive CLI.
          </p>
          <br />
          <br />
          <p>
            1. (Express): Express is a minimalist and flexible framework that
            provides a simple and intuitive API for building web applications
            with Node.js. Some of its key features and benefits include: Simple
            and intuitive API: Express provides a simple and easy-to-use API
            that allows developers to quickly build web applications with
            Node.js. Minimalist approach: Express follows a minimalist approach,
            which means that it provides only the essential features and leaves
            the rest to the developers.Middleware support: Express provides
            built-in support for middleware, which allows developers to add
            functionality to their applications easily. Large community: Express
            has a large and active community of developers, which means that
            there are plenty of resources available for learning and getting
            help.
          </p>
          <p>
            2. (NestJS): NestJS is a framework that is built on top of Express
            and provides additional features and benefits. Some of its key
            features and benefits include: Dependency injection: NestJS provides
            built-in support for dependency injection, which makes it easier to
            manage dependencies and write modular and scalable code. Modular
            architecture: NestJS follows a modular architecture, which allows
            developers to break their applications into smaller and more
            manageable modules. Intuitive CLI: NestJS provides an intuitive CLI
            that makes it easy to create new applications, modules, controllers,
            and services.
          </p>
        </div>
        <div className='pb-10'>
          <h2 className='text-2xl font-semibold mb-2'>MongoDB Aggregation:</h2>
          <hr className='border border-cyan-600 mb-5' />
          <p>
            When working with data in MongoDB, you may quickly have to run
            complex operations, with multiple stages of operations to gather
            metrics for your project. Generating reports and displaying useful
            metadata are just two major use cases where MongoDB aggregation
            operations can prove incredibly useful, powerful, and flexible.
          </p>
          <p>
            Aggregation operations process data records and return computed
            results. Not only do we have the ability to aggregate data on the
            client side with JavaScript, but we can use MongoDB to run
            operations on the server against our collections stored in the
            database before the result is returned to the client.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
