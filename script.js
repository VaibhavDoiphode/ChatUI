document.addEventListener("DOMContentLoaded", function () {
  const messages = [
    {
      id: 1,
      img: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      name: "Ritesh Agarwal",
      content:
        "You: I live in Pune. Visit kol only once in a while. Catch up with u ...",
      title: "CEO at Oyo Rooms",
      date: "Mar 8",
    },
    {
      id: 2,
      img: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      name: "Joshua Epright",
      content:
        "Joshua: Hi Anil, Thanks so much for connecting! Please let me...",
      title: "CEO at Oyo Rooms",
      date: "Jan 23",
    },
    {
      id: 3,
      img: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      name: "Mitesh Ganvit",
      content: "Mitesh: how's your holiday break? By the ...",
      title: "CEO at Oyo Rooms",
      date: "Jan 4",
    },
    {
      id: 4,
      img: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      name: "Jessica Tanner",
      content: "Jessica: The Growing Lean Podcast is a ...",
      title: "CEO at Oyo Rooms",
      date: "Dec 19, 2023",
    },
    {
      id: 5,
      img: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      name: "Anshul Gupta",
      content: "Anshul: Going well",
      title: "CEO at Oyo Rooms",
      date: "Oct 28, 2023",
    },
    {
      id: 6,
      img: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      name: "Kunal Kumar",
      content: "Kunal: You're Welcome",
      title: "CEO at Oyo Rooms",
      date: "Oct 27, 2023",
    },
    {
      id: 7,
      img: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      name: "Mitesh Ganvit",
      content: "Mitesh: how's your holiday break? By the way...",
      title: "CEO at Oyo Rooms",
      date: "Jan 4",
    },
    {
      id: 8,
      img: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
      name: "Jessica Tanner",
      content: "Jessica: The Growing Lean Podcast is an...",
      title: "CEO at Oyo Rooms",
      date: "Dec 19, 2023",
    },
  ];

  const messageList = document.getElementById("messageList");
  const chatWindow = document.getElementById("chatWindow");
  const chatProfileImg = document.getElementById("chatProfileImg");
  const chatProfileName = document.getElementById("chatProfileName");
  // const chatProfileTitle = document.getElementById('chatProfileTitle');
  const chatMessages = document.getElementById("chatMessages");
  const minimizedChatWindow = document.getElementById("minimizedChatWindow");
  const closeChatWindowButton = document.getElementById("closeChatWindow");
  const minimizedChatProfileImg = document.getElementById(
    "minimizedChatProfileImg"
  );
  const minimizedChatProfileName = document.getElementById(
    "minimizedChatProfileName"
  );
  const messagingUI = document.getElementById("messagingUI");
  const chatButton = document.getElementById("chatButton");
  const icons = document.querySelector(".icons");

  // Function to render messages
  function renderMessages() {
    messages.forEach((message) => {
      const messageDiv = document.createElement("div");
      messageDiv.className = "message";
      messageDiv.dataset.messageId = message.id;

      messageDiv.innerHTML = `
                  <div class="details-content">
                      <div>
                          <img src="${message.img}" alt="${message.name}">
                      </div>
                      <div class="bottom-bord">
                          <div class="name-date">
                              <span class="name-content">${message.name}</span>
                              <span class="date">${message.date}</span>  
                          </div>         
                          <div> 
                              <p class="desc-content">${message.content}</p> 
                          </div>
                      </div>     
                  </div>
              `;

      messageDiv.addEventListener("click", () => {
        showDetailedMessage(message);
      });

      messageList.appendChild(messageDiv);
    });
  }

  // Function to show detailed message view
  function showDetailedMessage(message) {
    chatMessages.innerHTML = "";

    const chatMessageDiv = document.createElement("div");
    chatMessageDiv.className = "chat-message d-flex";

    chatMessageDiv.innerHTML = `
          <div class="chatwindow-section">

          <div class="chatwindow-upper1">
           <img src="${message.img}" alt="Profile" class="profile-img mr-2">
              <div>
                  <strong class="mb-0">${message.name}</strong><br>
                  <p><i class="fas fa-star icon"></i> &nbsp; ${message.title} &nbsp; <i class="fas fa-star icon"></i></p>
              </div>
          </div>

      <div class="chatwindow-upper2 mt-1">
          <div>
           <img src="${message.img}" alt="Profile" class="profile-img mr-2">
          </div>
        <div class="chatwindow-upper2A-cover mr-1">
            <div class="chatwindow-upper2A">
              <div class="chatwindow-upper2A-1">
                <div class="mx-2">
                  <strong>${message.name}</strong>
                </div>
                <div >
                  <p>${message.date}</p>
                </div>
              </div>

              <div class="chatwindow-upper2A-content">
                  <p class="mx-2">${message.content}</p>
              </div>
            </div>
       </div> 
          </div>    
          `;

    chatMessages.appendChild(chatMessageDiv);

    chatProfileImg.src = message.img;
    chatProfileName.textContent = message.name;
    // chatProfileTitle.textContent = message.title;

    chatWindow.style.display = "block";
    minimizedChatWindow.style.display = "none";
  }

  // Function to minimize the chat window
  function minimizeChatWindow() {
    chatWindow.style.display = "none";
    minimizedChatWindow.style.display = "flex";
  }

  // Function to restore the chat window
  function restoreChatWindow() {
    chatWindow.style.display = "block";
    minimizedChatWindow.style.display = "none";
  }

  // Function to toggle the messaging UI
  function toggleMessagingUI() {
    if (
      messagingUI.style.display === "none" ||
      messagingUI.style.display === ""
    ) {
      messagingUI.style.display = "block";
    } else {
      messagingUI.style.display = "none";
    }
  }

  // Initial render of messages
  renderMessages();

  // Event listener for chat button
  chatButton.addEventListener("click", toggleMessagingUI);

  // Event listener for icons div to toggle the messaging UI
  icons.addEventListener("click", toggleMessagingUI);

  // Event listener for close button to minimize the chat window
  closeChatWindowButton.addEventListener("click", minimizeChatWindow);

  // Event listener for minimized chat window to restore the chat window
  minimizedChatWindow.addEventListener("click", restoreChatWindow);
});
