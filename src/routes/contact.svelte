<script>
  import HeadTitle from "../components/UI/HeadTitle.svelte";
  import IconInput from "../components/forms/IconInput.svelte";
  import IconTextarea from "../components/forms/IconTextarea.svelte";
  import ActionButton from "../components/forms/ActionButton.svelte";
  import SubmitButton from "../components/forms/SubmitButton.svelte";
  import CheckBox from "../components/forms/CheckBox.svelte";

  const mailForm = [];
  const errors = [];
  let email = null;
  let msgTitle = null;
  let message = null;
  let checked = false;

  function checkForm(e) {
    if (this.email && this.msgTitle && this.message) return true;
    this.errors = [];
    if (!this.email) this.errors.push("Email Requis");
    if (!this.msgTitle) this.errors.push("Il faut un titre à votre message");
    if (!this.message)
      this.errors.push("Un message est nécessaire, quelques mots suffisent.");
    if (!this.checked)
      this.errors.push(
        "Vous devez cochez la case pour envoyer, cela confirmera l'authenticité de votre message"
      );
    e.preventDefault();
  }
</script>

<div class="mx-auto text-center">
  <HeadTitle title="Formulaire de contact" />

  <!-- <h1 class="pb-6 text-center">Contactez-moi</h1> -->
  <!--a(href='mailto:fabezio@outlook.fr')
  //ActionButton()
  ActionButton(color='btn-purple' text='Envoyer un message' icon='fas fa-envelope' action='')
  //button.btn.btn-purple.text-white.mx-auto.block Envoyer un message
  
  -->
  <form>
    <!--IconInput(width='w-full' label='Nom: ' prependIcon='fas fa-users' appendIcon='' v-model='name' )-->
    <!--p() {name}-->
    <!--p.text-red-500(v-if='!lastname') veuillez entrer votre nom-->
    <!--IconInput(width='w-full' label='Prénom: ' prependIcon='fas fa-user' appendIcon='appendIcon' v-model='firstname' )-->
    <!--p() {firsname}-->
    <IconInput name="firstname" label="entrez votre pénom" />
    <IconInput type="email" name="email" label="entrez votre email" />
    <IconInput
      type="password"
      name="password"
      label="entrez votre mot de passe" />
    <IconInput
      type="password"
      name="password2"
      label="entrez de nouveau votre mot de passe" />

    <!--IconInput(width='w-full' label='Téléphone: ' type='' prependIcon='fas fa-phone' appendIcon='appendIcon' v-model='phone' )-->
    <!--p() {phone}-->
    <!-- <IconInput label="Objet: " type="" prependIcon="fas fa-user-tag" appendIcon="appendIcon" v-model="msgTitle"></IconInput> -->
    <!-- <p>{msgTitle}</p>
    <IconTextarea v-model="message" label="Votre message: " prependIcon="fas fa-comment"></IconTextarea>
    <p>{message}</p> -->
    <!--.flex.my-3.items-center.w-full
    span.text-gray-800.fas.fa-comment(class='w-1/12')
    textarea.border.rounded.m-3.p-3.w-full(placeholder='Votre message' label='Message', rows='2', v-model='message' required)
    
    -->
    <CheckBox class="my-4" />
    <!--.flex.my-4.items-center
    //input#checkbox.mr-2(type='checkbox', v-model='checkbox' required)
    //label.text-justify(v-model="checkbox" ) Je certifie que toutes les informations fournies ci-dessus sont exactes
    
    -->
    <!-- <div class="text-red-700" v-if="errors.length != 0">
      <ul>
        {#each errors as error, i}
        <li>{i}. {error}</li>
        {/each}
      </ul>
    </div> -->
    <!--div(v-if='errors.length == 0') Merci pour votre confiance.-->
    <div class="flex items-center">
      <SubmitButton />
      <!--IconInput.mr-2(color='btn-info' type='submit' href='mailto:fabezio@outlook.fr' value='ENVOYER' prependIcon='fas fa-paper-plane')-->
      <!-- <ActionButton class="h-12" color="btn-warning" text="annuler" icon="fas fa-times"></ActionButton> -->
    </div>
  </form>
</div>
