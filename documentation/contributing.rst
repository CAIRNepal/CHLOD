.. HeritageGraph documentation master file, created by sphinx-quickstart on Wed Nov 20 22:11:10 2024.

Contributing to HeritageGraph
=============================

Thank you for your interest in contributing to **HeritageGraph**! We are happy to have you join our community and help us build a platform dedicated to preserving and sharing Nepalese cultural heritage through digital means. Your contributions, whether big or small, will have a significant impact on our mission.

Overview of the Project
------------------------

**HeritageGraph** project consists of three primary components:

1. **Frontend (React.js)**:  
   The frontend is built with **React.js (version 18.0.2)**. It provides an interactive and responsive user interface for browsing and interacting with the platform.

2. **Backend (Django Rest Framework)**:  
   The backend is powered by **Django Rest Framework (DRF)**, which handles user authentication, form submissions, data processing, moderation, and more. It acts as the backbone of the platform, ensuring seamless communication between the frontend and the database.

3. **Drupal-DKAN (Data Distribution)**:  
   **Drupal-DKAN** is used for data distribution. It enables the structured distribution of cultural heritage data, making it accessible and interoperable across different systems.

How You Can Contribute
-----------------------

We welcome contributions from everyone, regardless of experience level. Here’s how you can get started:

To begin contributing, first, fork the repository to your own GitHub account. This will create a personal copy of the project where you can work on your changes. Make sure to fork all the branches too.

**Choose an Area to Contribute**  
   You can contribute to one of the following areas:

   - **Frontend (React)**:  
     Work on improving the user interface, fixing bugs, or adding new features. If you have suggestions for improving user experience (UX) or accessibility, we encourage you to contribute!

     

        git clone -b dkandev https://github.com/CAIRNepal/CHLOD.git

    Navigate to the `CHLOD/` directory:

 
        cd CHLOD/docroot/frontend

     Install dependencies:

        npm install

    And run the project:
        npm run start

     You can view the frontend on `localhost:3000`.

   - **Backend (Django Rest Framework)**:  
     Contribute to the API endpoints, authentication, or backend logic. Help optimize and enhance the functionality of our backend.

     

        git clone -b django https://github.com/CAIRNepal/CHLOD.git

     Navigate to the backend directory:

        cd backend/

     Set up the environment using the `requirements.txt`:

        cd heritage_graph/
        python manage.py runserver

   - **Data Distribution (Drupal-DKAN)**:  
     If you are familiar with Drupal or have experience with data distribution systems, you can help manage and improve our DKAN integration.

   - **Knowledge Graphs**:  
     Help us expand the Knowledge Graphs by contributing to data modeling, improving the graph structure, or integrating new datasets. This section includes the LinkML code.

     
     
        git clone -b linkML-dev https://github.com/CAIRNepal/CHLOD.git

     Recreate the environment using `requirements.txt`.

     You can now contribute to the Knowledge Graphs section.

**Write Tests**  
   It’s essential to write tests for your code to ensure that the platform remains stable and reliable. This is particularly important in the backend and data distribution parts of the project.

**Submit a Pull Request**  
   Once you’ve made your changes, push them to your fork and open a pull request (PR) to the **main repository**. Be sure to describe the changes you made in the PR description.

   We review all pull requests carefully and work with you to ensure your contributions are in line with the project’s goals and standards.

Guidelines for Contributing
---------------------------

To make the contribution process smooth and efficient, we have a few guidelines:

- **Commit Messages**:  
   Write clear, concise, and meaningful commit messages that describe what and why changes were made.

- **Issues**:  
   If you find a bug, have an idea for a new feature, or want to improve something, feel free to open an issue on GitHub. We actively track issues and prioritize them based on community feedback.

- **Documentation**:  
   If you add new features or make significant changes, please remember to update the documentation accordingly. This will help others understand your contributions and make the platform more accessible.

Reporting Issues
----------------

If you encounter any bugs or issues, please use the **GitHub Issues** feature to report them. Include as much information as possible, such as:
   - Steps to reproduce the issue.
   - Expected vs. actual behavior.
   - Screenshots (if applicable).
   - Any error messages you received.

Join the Conversation
---------------------

We encourage open discussions and feedback from all contributors. If you have questions or need help, you can reach out to the community via:

- **CAIR-Nepal Discord**: A space to ask questions, propose ideas, or discuss project-related topics. Join us here: https://discord.gg/qSwRaWgk


License
-------

 

Conclusion
----------

Thank you for considering contributing to **HeritageGraph**! Every contribution, whether it’s a code fix, a new feature, or a suggestion, helps us create a more inclusive and accessible platform for preserving Nepalese cultural heritage.

We’re excited to see what you bring to the project and look forward to collaborating with you!
