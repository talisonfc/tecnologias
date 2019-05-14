# GitLab Continuos Integration & Delivery

- **Continuos Integration** - is the practice of integrating code into a shared repository and building/testing each change automatically, as early as possible
- **Continuos Delivery** - adds the software can be released to production at any time, often by automatically pushing changes to a staging system
- **Continuos Deployment** - goes futher and pushes changes to production automatically

# Entire DevOps lifecycle

- **Build** your application using gitlab runners
- **Run** unit and integration test to check if your code is valid
- Look at a live proview of your development branch with Review Apps before merging into stable
- **Deploy** to multiple environments like staging and production, and support advanced features such as canary deployments
- **Monitor** performances and status of your application

# Arquitecture

- **GitLat CI/CD** is a part of GitLab, a web application with an API that store its stable in a database. It manages projects/build and provider a nice user interface, besides all the features of gitlab.
- **GitLab Runner** is an application which processes builds. It can be deployed separately and works weith GitLab CI/CD through an API.

In order to run tests, you need at least one GitLab instance and one GitLab Runner.