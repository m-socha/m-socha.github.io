define([], function() {
  
  var workTerms = [
    {
      jobTitle: 'Software Engineering Intern',
      employerName: 'Facebook Inc',
      employerLocation: 'Seattle, WA',
      date: 'Sep - Dec 2018',
      skillTags: ['PHP/Hack', 'React', 'GraphQL', 'Hive'],
      description: '<p>I worked as a Software Engineering Intern on the Authenticity Team, which supports a platform for verifying entities on Facebook.'
        + ' I developed a new feature that lets users verify their identity using notary services. My contributions include:</p>'
        + '<li>Developing a user-facing web wizard, internal tooling, and analytics dashboards for the new feature</li>'
        + '<li>Handling the project’s cross-functional communications with design, content, and operations teams</li>'
        + '<li>Overseeing the launch of the project and expansions to new markets</li>'
        + '</ul>'
    },
    {
      jobTitle: 'Software Engineering Intern',
      employerName: 'Facebook Inc',
      employerLocation: 'Menlo Park, CA',
      date: 'Jan - Apr 2018',
      skillTags: ['React', 'React Native', 'GraphQL', 'PHP/Hack', 'Hive'],
      description: '<p>I worked as a Software Engineering Intern on Facebook’s Job Search platform, which is a new initiative that focuses on connecting job seekers'
        + ' with local employers. I worked on several different areas of the Job Search platform, where my contributions include:</p>'
        + '<ul>'
        + '<li>Adding several React Native mobile surfaces to help page admins manage their job posts, including a new applications and upcoming interviews surface</li>'
        + '<li>Building Hive data pipelines, a PHP API and a React Native mobile front-end to implement an insights dashboard that shows page admins key job post metrics</li>'
        + '<li>Integrating the React-based web job seeker application flow with a new feature that allows users to build resumes</li>'
        + '<li>Improving performance throughout Job Search mobile surfaces, including expanding pagination and replacing front-end filtering with backend GraphQL filtering</li>'
        + '</ul>'
    },
    {
      jobTitle: 'Mobile Engineer - iOS',
      employerName: 'Wish Inc',
      employerLocation: 'San Francisco, CA',
      date: 'Apr - Aug 2017',
      skillTags: ['iOS', 'Swift', 'Objective-C'],
      description: '<p>Wish is a large-scale mobile-centric e-commerce platform that focuses on providing an intuitive and highly personalized shopping experience. As a member of the iOS Team, I was involved in a complete rewrite of Wish\'s iOS app from Objective-C to Swift, where my contributions include:</p> <ul><li>Implementing the app\'s networking layer, including API services, login, and session management</li><li> Transitioning the UI from a static frame-based approach to Auto Layout, and building reusable views such as rating scales and loading pages</li><li>Building several user-facing features of the app, including the main product details page, user and merchant profile pages, and login screens</li></ul>'
    },
    {
      jobTitle: 'Mobile Engineer',
      employerName: 'Wish Inc',
      employerLocation: 'San Francisco, CA',
      date: 'Aug - Dec 2016',
      skillTags: ['Android', 'iOS', 'MongoDB', 'Java', 'Objective-C', 'Python', 'Hadoop', 'Hive'],
      description: '<p>As a member of Wish\'s Product Team, I contributed to Wish\'s Android, iOS, and web clients, as well as their MongoDB and Python based backend. My contributions include:</p> <ul><li>Implementing experimental features across Wish\'s mobile and web clients, with results including an increase of over 4% in annual order volume and a doubling of product shares to social media</li><li>Analyzing performance of experimental features using Hive (Hadoop data warehouse) to make recommendations concerning their rollout and segmentation</li><li>Revamping fraud detection algorithms to analyze different criteria for high-value users, preventing thousands of false positive detections per month</li></ul>'
    },
    {
      jobTitle: 'Software Developer - Android',
      employerName: 'WeMesh Inc',
      employerLocation: 'Waterloo, ON',
      date: 'Jan - Apr 2016',
      skillTags: ['Android', 'Java', 'OpenGL ES', 'RenderScript', 'Retrofit'],
      description: '<p>WeMesh (aka Rave) is a Waterloo-based startup whose main product is a synchronous video viewing platform for mobile devices. Users are able to join so-called "meshes", where they can message and VoIP one another while watching a video synced to within a few milliseconds. I made significant contributions to WeMesh\'s Android client, which include:</p> <ul><li>Expanding the application to three additional content sources (Dropbox, Google Drive, Google Photos)</li><li>Applying OpenGL ES to implement filters on videos, including blurring and letterbox cropping</li><li>Overhauling the UI of several key screens, including the app\'s lobby and video feed</li><li>Using performance profiling tools to improve the Android app\'s stability and efficiency</li></ul>'
    },
    {
      jobTitle: 'Application Developer',
      employerName: 'Kenna Inc',
      employerLocation: 'Mississauga, ON',
      date: 'May - Aug 2015',
      skillTags: ['SQL', 'JavaScript', 'jQuery', 'HTML', 'CSS'],
      description: '<p>Kenna Inc. is a digital marketing company that provides data analytics and software development services for its clients. As an Application Developer, I was involved in full stack web development as well as data retrieval and analysis, where my tasks included:</p> <ul><li>Frontend web development, including redesigns, performance optimizations and bug fixes</li><li>Backend development to expand APIs that interface with client databases</li><li>MS SQL query design and optimization, including for ad-hoc data requests</li></ul>'
    }
  ];

  return {workTerms: workTerms};
});
