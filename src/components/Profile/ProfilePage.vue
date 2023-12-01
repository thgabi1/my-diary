<template>
  <div class="profile">
    <div class="profile-header">
      <div class="cover-photo"></div>

      <div class="photo-name-container">
        <div class="profile-photo"></div>
        <div class="profile-name">
          <p>Sarah Hatchinsky</p>
        </div>
        <div>
          <button
            class="btn new-note-btn d-flex justify-content-center align-items-center"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <span class="material-icons" id="plus-icon"> add </span>New Note
          </button>
        </div>
      </div>
    </div>
    <div class="profile-content center p_top_small">
      <div class="container-fluid">
        <div class="row center">
          <div class="col-2 timeline"></div>
          <div class="col notes"></div>
        </div>
      </div>
    </div>
    <!-- <div class="new-note-modal">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </div> -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              How was your day today?
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    createModal() {
      const modal = document.createElement("div");
      const content = document.querySelector(".profile-content");
      modal.style =
        "height: 50%; width: 50%; background-color: black; position: absolute";
      content.style = "position: relative;";
      content.appendChild(modal);
    },
    addNewNote() {},
  },
};
</script>

<style scoped>
.profile {
  position: relative;
}

.new-note-modal {
  position: absolute;
  width: 80%;
  height: 70%;
  top: 15%;
  left: 10%;
  background-color: beige;
  z-index: 40;
}

.cover-photo {
  background-image: url("../../assets/pictures/cover-photo1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 20vh;
}

.photo-name-container {
  position: relative;
  display: flex;
  align-items: center;
  z-index: 10;
  top: 8px;
}

.profile-photo {
  background-image: url("../../assets/pictures/profile-pic1.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  position: absolute;
  left: 30px;
  border: 5px solid var(--peachYellow);
}

.profile-name {
  position: relative;
  left: 250px;
  width: 500px;
  top: -5px;
}

.profile-name p {
  font-size: 32px;
  letter-spacing: 10px;
  text-transform: uppercase;
  color: #fff;
  font-family: var(--secondary-font);
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.472);
  border-radius: 10px;
  box-shadow: var(--box-shadow);
}

.profile-content {
  background-color: var(--cream);
  height: 75vh;
  position: relative;
}

.timeline {
  background-color: blue;
  height: 60vh;
  margin: 20px;
}

.notes {
  background-color: pink;
  height: 65vh;
}

.new-note-btn {
  position: absolute;
  right: 40px;
  top: 20px;
  font-family: var(--secondary-font);
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
}

#plus-icon {
  margin-right: 5px;
  border: 2px solid black;
  border-radius: 10px;
  font-size: 18px;
}

.new-note-btn:hover {
  background-color: var(--peachYellow);
  border: 1px solid black;
}
</style>
