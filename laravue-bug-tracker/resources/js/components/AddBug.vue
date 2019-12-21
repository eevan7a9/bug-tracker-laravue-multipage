<template>
  <div class="w-100">
    <b-button v-b-toggle.collapse-1 variant="success">
      New Bug
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      </span>
    </b-button>
    <b-collapse id="collapse-1" class="mt-2">
      <b-card>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label for="title">Bug Title</label>
              <input
                type="text"
                class="form-control"
                name="title"
                aria-describedby="helpId"
                placeholder="Navbar error"
              />
              <small id="helpId" class="form-text text-muted">name that describe the bug</small>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="project">Project Name</label>
              <select class="form-control" name="project" id="project">
                <option>Project X</option>
                <option>Project Y</option>
                <option>Project Z</option>
              </select>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="description">Bug Description</label>
          <textarea class="form-control" name="description" id="description" rows="3"></textarea>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <label for="browser">Browser</label>
              <select class="form-control" name="browser" id="browser">
                <option>Chrome</option>
                <option>Firefox</option>
                <option>Opera</option>
                <option>Edge</option>
                <option>Safari</option>
                <option>Internet Explorer</option>
              </select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label for="operating_system">Operating System</label>
              <select class="form-control" name="operating_system" id="operating_system">
                <option>Mac Os</option>
                <option>Windows 10</option>
                <option>Windows 8</option>
                <option>Linux (Debian/Ubuntu)</option>
                <option>Linux (Manjaro)</option>
              </select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label for="type">Bug Type</label>
              <select class="form-control" name="type" id="type">
                <option>New Feature</option>
                <option>Frontend/Design</option>
                <option>Functional Bugs</option>
                <option>Api</option>
                <option>Handling Error</option>
                <option>Control Flow</option>
              </select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="radio-container">
              <label>Priority</label>
              <div class="form-check">
                <label class="form-check-label">
                  <input type="radio" class="form-check-input" name="high" id="high" value="high" />
                  High
                </label>
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input type="radio" class="form-check-input" name="mid" id="mid" value="mid" />
                  Mid
                </label>
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input type="radio" class="form-check-input" name="high" id="high" value="low" />
                  Low
                </label>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label for="date">Date</label>
              <input type="date" class="form-control" name="date" id="date" aria-describedby="date" />
              <small id="date" class="form-text text-muted">Date of issue</small>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label for="assigned">Assigned To :</label>
              <select class="form-control" name="assigned" id="assigned">
                <option>Naruto</option>
                <option>Sakura</option>
                <option>Sasuke</option>
                <option>Luffy</option>
                <option>Nami</option>
              </select>
            </div>
          </div>
          <div class="col-md-4 mt-5">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
              </div>
              <div class="custom-file">
                <input
                  type="file"
                  class="custom-file-input"
                  id="inputGroupFile01"
                  aria-describedby="inputGroupFileAddon01"
                />
                <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center my-3">
          <button class="btn btn-primary btn-lg">
            Submit
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
