<script>
  import HeadTitle from "../components/UI/HeadTitle.svelte";
  import IconInput from "../components/forms/IconInput.svelte";
  import IconTextarea from "../components/forms/IconTextarea.svelte";
  import ActionButton from "../components/UX/ActionButton.svelte";
  import SubmitButton from "../components/forms/SubmitButton.svelte";
  import CheckBox from "../components/forms/CheckBox.svelte";

  // const nodemailer = require("nodemailer");
  const emitter = "fabezio@outlook.fr"
  // let transporter = nodemailer.createTransport({
  //   host: "gmail",
  //   secure: false,
  //   auth: {
  //     user: emitter,
  //     pass: "C0denCQRT",
  //   },
  // });
  

  const mailForm = [];
  const errors = [];
  let email = null;
  let message = "";
  let societyName = null;
  let societyUrl = null;
  let firstname = null;
  let lastname = null;
  let isChecked = false;
  let maySendMail = false;

  function resetForm() {
    return {
      email: null,
      message: "",
      societyName: null,
      societyUrl: null,
      firstname: null,
      lastname: null,
      isChecked: false,
    };
  }
  function handleForm() {
    if (email.length > 0) mailForm.push(email);
    if (societyName.length > 0) mailForm.push(societyName);
    if (societyUrl.length > 0) mailForm.push(societyUrl);
    if (firstname.length > 0) mailForm.push(firstname);
    if (lastname.length > 0) mailForm.push(lastname);
    if (message.length > 0) mailForm.push(message);
  }
  // let info = transporter.sendMail({
  //   from: `fabric-io <${emitter}>`,
  //   to: `${firstname} ${firstname} <${email}> `,
  //   subject: "demande",
  //   text: message,
  // })
  $: if (isChecked == true && errors.length == 0) maySendMail = true;

  // function checkForm(e) {
  //   if (this.email && this.msgTitle && this.message) return true;
  //   this.errors = [];
  //   if (!this.email) this.errors.push("Email Requis");
  //   if (!this.msgTitle) this.errors.push("Il faut un titre à votre message");
  //   if (!this.message)
  //     this.errors.push("Un message est nécessaire, quelques mots suffisent.");
  //   if (!this.checked)
  //     this.errors.push(
  //       "Vous devez cochez la case pour envoyer, cela confirmera l'authenticité de votre message"
  //     );
  //   e.preventDefault();
  // }
</script>

<div class="mx-auto text-center">
  <HeadTitle title="Formulaire de contact" />

  <!-- <h1 class="pb-6 text-center">Contactez-moi</h1> -->
  <!--a(href='mailto:fabezio@outlook.fr')
  //ActionButton()
  ActionButton(color='btn-purple' text='Envoyer un message' icon='fas fa-envelope' action='')
  //button.btn.btn-purple.text-white.mx-auto.block Envoyer un message
  
  -->
  <form class="w-50 d-block mx-auto text-center">
    <!--IconInput(width='w-full' label='Nom: ' prependIcon='fas fa-users' appendIcon='' v-model='name' )-->
    <!--p() {name}-->
    <!--p.text-red-500(v-if='!lastname') veuillez entrer votre nom-->
    <!--IconInput(width='w-full' label='Prénom: ' prependIcon='fas fa-user' appendIcon='appendIcon' v-model='firstname' )-->
    <!--p() {firsname}-->
    <fieldset>
      <div class="row">
        <div class="col">
          <legend>persona</legend>
          <IconInput name={lastname} label="nom: " />
          <IconInput name={firstname} label="prénom: " />
          <IconInput type="email" name={email} label="entrez votre email" />
        </div>
        <div class="col">
          <legend>entreprise</legend>
          <IconInput name={societyName} label="raison sociale" />
          <IconInput name={societyUrl} label="adresse url de l'entreprise" />
          <!-- <div class="d-flex">
        </div> -->
        </div>
      </div>
    </fieldset>

    <!-- <div class="d-flex">
  </div> -->
    <!-- <div class="row"> -->
    <fieldset>
      <legend>Message</legend>
      <textarea
        class="rounded-lg py-1 px-3"
        name="message"
        rows="2"
        cols="40"
        on:input={(event) => {
          message = event.target.value;
        }}
        required>Entrez votre message</textarea>

      <!-- </div> -->
      <!-- <div class="row"> -->
      <legend>Confirmation</legend>
      <CheckBox
        iSwear="Je certifie la conformité des données ci-jointes"
        on:check={() => {
          isChecked != isChecked;
        }}
        class="my-4" />

      <legend>Opérations</legend>
      <div class="btn-group">
        <SubmitButton on:check(handleForm) />
        <button
          class="btn btn-warning"
          on:click={resetForm}>recommencer</button>
        <a href="." class="btn btn-danger">annuler</a>
      </div>
    </fieldset>
  </form>
  <hr />
  champs
  {#each mailForm as field}
    <p>{field}</p>
  {/each}
  <br />
  longueur
  {mailForm.length}
</div>
