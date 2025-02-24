
1. Click the **Use this Template** button and then **Create a new repository**
1. Select the repository owner (e.g. your GitHub account)
1. Enter a unique name for your new repository
1. Click the **Code** button
1. Click **Create Codespace on main** button
1. [Customize your portfolio site](#-customize-your-site-in-3-steps) with Copilot 
1. [Deploy your site](#-deploy-your-web-application)



## 🗃️ JavaScript Portfolio template

This repo is a GitHub template to build a JavaScript personal portfolio frontend web application using the React framework. The goal is to give you a template that you can immediately utilize to create your own website through Codespaces.

The repo contains the following:

* `/.devcontainer`
  - `.devcontainer/Dockerfile`: Configuration file used by Codespaces to determine operating system and other details.
  - `.devcontainer/devcontainer.json`: Configuration file used by Codespaces to configure Visual Studio Code settings, such as the enabling of additional extensions.
* `/src`: HTML, JS and CSS files used to build your portfolio site.
* `.eslintrc`: Settings for [ESLint](https://eslint.org/)</a> that is included for code consistency and quality.
* `.prettierrc`: Settings for [Prettier](https://prettier.io/) that is used to format code.
* `package.json` and `package-lock.json`: Defines the project information for [Node.js](https://nodejs.org/)</a>, dependent packages and the versions needed of each.

<br />


### Create your portfolio

1. Create a repository from this template. Use this [create repo link](https://github.com/microsoft/codespaces-project-template-js/generate). Select the repository owner, provide a name, a description if you'd like and if you'd like the new repository to be public or private.
1. Before creating the Codespace, enable GitHub Copilot for your account. If it is not enabled, take a look at [Customize your portfolio site using Copilot](#-customize-your-site-in-3-steps).
1. Navigate to the main page of the newly created repository.
3. Under the repository name, use the Code drop-down menu, and in the Codespaces tab, select "Create codespace on main".

    <img src="./__images__/createcodespace.png" alt="Create codespace" style="width:270px;"/>

    
4. Wait as GitHub initializes the Codespace.

    <img src="https://user-images.githubusercontent.com/82035/194710065-92f8c325-6f57-4c77-88d7-da8db3c235e9.png" alt="Codespace initializing" style="width: 600px;"/>
    
5. When complete you will see your Codespace load with a terminal section at the bottom. Codespaces will install all the required extensions in your container, followed by executing `npm install`. Once the package installs are completed, Codesaces will execute `npm start` to start your web application running within your Codespace. 

   When the web application has successfully started you will see a message in the terminal that the server is running on port 1234 within your Codespace:

   <img src="https://user-images.githubusercontent.com/82035/220460347-605293ba-d3d1-483a-8157-71eaabb7ef52.png" alt="Web application started on port 1234" style="width: 300px;"/>
   
<br />


<br/>

## 🏃 Deploy your web application

Project includes the setup needed for you to deploy **FREE** to either [Azure Static Web Apps](https://azure.microsoft.com/products/app-service/static/?WT.mc_id=academic-79839-sagibbon) _**or**_ [GitHub Pages](https://pages.github.com/)</a>. Instructions are included below for both:

### Azure Static Web Apps

[Azure Static Web Apps](https://azure.microsoft.com/products/app-service/static/?WT.mc_id=academic-79839-sagibbon) is Microsoft's hosting solution for static sites (or sites that are rendered in the user's browser, not on a server) through Azure. This service provides additional opportunities to expand your site through Azure Functions, authentication, staging versions and more.

You'll need both Azure and GitHub accounts to deploy your web application. If you don't yet have an Azure account you can create it from within during the deploy process, or from below links:

* [Create a (no Credit Card required) Azure For Students account](https://azure.microsoft.com/free/students/?WT.mc_id=academic-79839-sagibbon)
* [Create a new Azure account](https://azure.microsoft.com/?WT.mc_id=academic-79839-sagibbon)

With your project open in Codespaces:

1. Click Azure icon in the left sidebar. Log in if you are not already, and if new to Azure, follow the prompts to create your account.
1. From Azure menu click “+” sign and then “Create Static Web App”.
1. If you are not logged into GitHub you will be prompted to log in. If you have any pending file changes you will then be prompted to commit those changes.
1. Set your application information when prompted:
    1. **Region**: pick the one closest to you
    1. **Project structure**: select "React"
    1. **Location of application code**: `/`
    1. **Build location**: `dist`
1. When complete you will see a notification at the bottom of your screen, and a new GitHub Action workflow will be added to your project. If you click “Open Action in GitHub” you will see the action that was created for you, and it is currently running.
![Azure Static Web App deploy](/__images__/swa-deploy.gif "Azure Static Web App deploy")
1. To view the status of your deployment, find your Static Web App resource in the Azure tab in the VS Code left side bar.
1. Once deployment is complete, you can view your brand new new publicly accessible application by right clicking on your Static Web App resource and selecting "Browse Site".


## 📚 Resources

* [GitHub Codespaces docs overview](https://docs.github.com/codespaces/overview)
* [GitHub Codespaces guides](https://docs.github.com/en/codespaces/guides)
* [GitHub Copilot docs](https://docs.github.com/en/copilot)
* [Use dev containers locally with VS Code and Docker](https://github.com/microsoft/vscode-remote-try-node#vs-code-dev-containers)
* [Web Development for Beginners](https://github.com/microsoft/Web-Dev-For-Beginners)
* [Get started with React](https://learn.microsoft.com/en-us/training/modules/react-get-started/?WT.mc_id=academic-79839-sagibbon)
