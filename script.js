 type="module"
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCk9qXdY9F4HGdHunoH-gT5qICi2uZ6YaM",
    authDomain: "my-web-29c9a.firebaseapp.com",
    projectId: "my-web-29c9a",
    storageBucket: "my-web-29c9a.appspot.com",
    messagingSenderId: "1027187424884",
    appId: "1:1027187424884:web:e0ece79406e7ce94e39b21",
    measurementId: "G-6LFL9KQ29T"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
