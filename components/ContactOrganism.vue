<template>
  <div class="contactOrganism">
    <h1>Contact us</h1>
    <div class="container small">
      <div class="contactOrganism__formDiv">
        <form onsubmit="return false">
          <div class="gridContact">
            <div class="field-1">
              <label for="">Prénom</label>
              <input
                type="text"
                placeholder="Enter your last name"
                id="lastName"
              />
            </div>
            <div class="field-2">
              <label for="">Nom</label>
              <input
                type="text"
                placeholder="Enter your last phone"
                id="phone"
              />
            </div>
            <div class="field-3">
              <label for="">Téléphone</label>
              <input
                type="text"
                placeholder="Enter your last message"
                id="phone"
              />
            </div>
            <div class="field-4">
              <label for="">Message</label>
              <input
                type="text"
                placeholder="Enter your last message"
                id="message"
              />
            </div>
            <div class="btnDiv">
              <button onclick="sendContact();">Submit</button>
            </div>
          </div>
          <br /><br />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
