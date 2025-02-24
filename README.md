
1. Click the **Use this Template** button and then **Create a new repository**
1. Select the repository owner (e.g. your GitHub account)
1. Enter a unique name for your new repository
1. Click the **Code** button
1. Click **Create Codespace on main** button
1. [Customize your portfolio site](#-customize-your-site-in-3-steps) with Copilot 
1. [Deploy your site](#-deploy-your-web-application)


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
