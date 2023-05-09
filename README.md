## Price Parameter Client

This is an Angular application that was developed using the following technologies:

- OpenAPI Specification (OAS)
- TypeScript
- TailwindCSS
- NgXS State Management
- NgXS Plugins
- Ant Design Components

The application was developed using the following steps:

1. The OAS was built from the req-res example file.
2. A TypeScript service library was generated using the OAS for the Angular application using openapi-generator. (check out api_sdk/ folder)
3. A mock API serving static data was created on SwaggerHub. (specs are available at api_docs/ folder)
4. Application state was modelled using ngxs store.
5. Application ui was built using tailwindcss utility classes.

The application is currently running on a demo server and can be accessed at the following URL:

```
https://venerable-banoffee-528091.netlify.app/
```

To run the application locally, clone the repository and install the dependencies:

```
git clone https://github.com/AlexSukh/PriceParameter.git
cd PriceParameter
npm install
```

Once the dependencies are installed, you can start the application by running the following command:

```
ng serve
```

The application will be running on http://localhost:4200.
