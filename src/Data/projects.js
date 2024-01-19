
const  projects = [
   
    {
        title: 'Landing using TfAgent',
        img: 'https://raw.githubusercontent.com/parthpatel-15/data/a59d0bb6b2d80e713235d2c5cad690c6de6997dd/land-image.png',
        description: "This project involves the development and implementation of a reinforcement learning model using TensorFlow and TF-Agents for training an agent to navigate and land a lunar lander successfully in the LunarLander-v2 environment. The code includes the installation of essential packages, setting up the reinforcement learning environment, defining a Q-network, and configuring a DQN agent with specific optimizer functions. The training process involves data collection in a replay buffer, and dynamic step drivers iterate to train the DQN agent. The project emphasizes the rationale behind the activation functions, utilizing softmax for multiclass classification, and the choice of the Adam optimizer for effectively handling sparse gradients.",
        shortDesc: "In this project I trained an agent to autonomously navigate and land a lunar lander in the LunarLander-v2 environment",
    },
    {
        title: ' Bicycle Recover Prediction Model Website',
        img: 'https://raw.githubusercontent.com/parthpatel-15/data/91ac2c23f927dbbfe34e425f1f8ac4a7a727f012/ML.jpg',
        description: " In this project, the focus revolves around bicycle theft data sourced from the City of Toronto. The dataset encapsulates comprehensive details of bicycle theft offenses, including occurrence and reporting dates, location specifics, bicycle details, etc. leveraged this data to train various models, namely Decision Tree, Linear Regression, Neural Network, Random Forest, and Support Vector Machine, each aiming to predict whether a stolen bicycle would be recovere or not. Feature selection using chi-square technique determined relevant features for model training, and up-sampling addressed the imbalanced dataset. A grid search was employed to fine-tune model parameters. Evaluating model performances, the group identified the Decision Tree algorithm as the most accurate, boasting an 89% accuracy score, while other models exhibited issues like overfitting (SVM, Random Forest, Neural Networks) or underfitting (Linear Regression). Additionally, the project allows users to manually input data and make predictions by selecting a model on a dedicated prediction page. ",
        shortDesc: "this project utilizes Toronto bicycle theft data to predict the likelihood of recovery.",
    },
    {
        title: 'Blog Radar',    
        img: 'https://raw.githubusercontent.com/parthpatel-15/data/a59d0bb6b2d80e713235d2c5cad690c6de6997dd/BlogRadar.jpg',
        description: "In this Software Development Project, the team is creating an AI-powered blog recommendation system by scraping diverse data sources, including blogs related to AI, Crypto, Fashion, Food, Health & Lifestyle, Music, Political, Sports, Stock Market, and Travel. The dataset undergoes rigorous cleaning and preprocessing steps to ensure its quality. The recommendation system, based on content-based filtering techniques, employs a machine learning approach, specifically the Naive Bayes algorithm, for classification and similarity finding. Hyperparameter tuning, using a grid search approach, optimizes the system's performance, and the trained model is analyzed through various strategies such as classification reports, confusion matrices, heat map analysis, and accuracy measurements. Additionally, the project aims to offer a user-friendly interface for manual data input and recommend 10 Blogs with Url.",
        shortDesc: "This software development project focuses on utilizing Artificial Intelligence Natural Language Processing and Machine Learning techniques to create a blog recommendation system. (in 5 people group)",
    },
    {
        title: 'Survey Site',
        img: 'https://raw.githubusercontent.com/parthpatel-15/data/181ade3820ca4279b5dfa4dd9342b99de9104c45/survey-1.JPG',
        description: "The survey site project, provides a user-friendly web platform for creating, managing, and participating in surveys. Registered users can effortlessly generate surveys, add diverse question types, edit templates, and manage survey statuses. The system supports detailed report generation and export functionalities. Anonymous users can conveniently view and participate in surveys without the need for authentication. The platform's external design is structured around key pages, ensuring an intuitive and organized user experience, with use cases ranging from survey creation and editing to anonymous participation and comprehensive report viewing.",
        shortDesc: "The application is designed to facilitate survey creation, participation, and management.",
    },
    {
        title: 'Pomodoro Timer',
        img: 'https://raw.githubusercontent.com/parthpatel-15/data/a59d0bb6b2d80e713235d2c5cad690c6de6997dd/pomodoro-timer.png',
        description: "This is a simple pomodoro timer app that helps you stay focused and productive by breaking your work into timed intervals. You can create sessions from 5 to 60 minutes, if you are studying on other tabs on your browser you can still see the timer on the title. The app also allows you to track all your previous pomodoro sessions, including those that were interrupted, completed, or still in progress. You can view your session history, see how long you worked, and analyze your productivity over time.",
        shortDesc: "This is a simple pomodoro timer app that helps you stay focused and productive.",
    },
    {
        title: 'Opera World - Book Your Ticket',    
        img: 'https://raw.githubusercontent.com/parthpatel-15/data/9b250bff48bf704fe9a4494b2deeddd354484d03/AND-1.1.jpg',
        description: "In my movie ticket booking Android app, I've designed a streamlined process with distinct pages for an effortless user experience. Starting with a captivating home page featuring a logo, users can smoothly navigate through movie selection, show timings, ticket quantity, and billing. Notably, the app integrates Google Maps API to display nearby theaters in Toronto downtown, allowing users to select their preferred venue seamlessly. Developed in Java, this app is a testament to my commitment to creating intuitive and efficient Android applications.",
        shortDesc: "This is a fully functional Movie Ticket Booking App application.",
    },
]


export default projects;