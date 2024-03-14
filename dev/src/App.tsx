import { useState } from 'react'
import emailjs from "@emailjs/browser"
import { AboutMi, AppContainer, CVLink, ContactButton, ContactContainer, Details, FullName, HLine, Icon, Icons, InfoBox, Title, TransparentBox } from './style'

function App() {
  const [shiwContact, setShowContact] = useState<boolean>(false);

  const sendEmail = async () => {
    function get0(n: number) {
      return n < 10 ? "0" + n : n;
    }
    const date = new Date();
    const tostring = `${get0(date.getDate())}/${get0(date.getMonth())}/${get0(date.getFullYear())} ${get0(date.getHours())}:${get0(date.getMinutes())}`
    await emailjs.send("service_1nbwmi8", "template_1rsjlxn", {
      from_name: "TARJETA DE PRESENTACION",
      message: {
        date: tostring,
        text: "Se ha descargado tu curiculum!!"
      },
      email: "sina.cappac@gmail.com",
    }, { publicKey: "H66sPlZP-6b8E53Oc" });
  }

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText("+34624306214").then(() => {
      alert("Se ha copiado el numero de telefono");
    })
  }

  const copyInstagram = () => {
    navigator.clipboard.writeText("@nour_z.h").then(() => {
      alert("Se ha copiado el Id de usuario");
    })
  }

  return (
    <AppContainer style={{ backgroundImage: "url(./assets/norman.PNG)" }}>
      <Details>
        <TransparentBox />
        <InfoBox>
          <FullName>
          NOUREDDIN AL HASAN
          </FullName>
          <HLine />
          <AboutMi>
            SOBRE MI
            <h2>
              Soy un profesional de la atención al cliente con una ampliaexperiencia entregando servicios excepcionales y gestionando equipos de manera eficiente. Mi enfoque meticuloso a la hora detrabajar y mi adaptabilidad a entornos dinámicos se alineanperfectamente con los desafíos operativos que puedan surgir ycon las expectativas de calidad en roles exigentes. Mi habilidadpara comunicarme de manera efectiva y trabajar en equipo meposiciona como un candidato ideal para contribuir positivamenteen cualquier entorno laboral.
            </h2>
          </AboutMi>
          <HLine />
          <CVLink download="noureddin-cv" href='./assets/Noureddin.CV.pdf' onClick={sendEmail}>
            Download CV
          </CVLink>
          <ContactButton onClick={() => setShowContact(true)}>
            Contacto
          </ContactButton>
          <TransparentBox style={{ height: "30px" }} />
        </InfoBox>
      </Details>
      {shiwContact && (
        <ContactContainer>
          <span onClick={() => setShowContact(false)} id='exit' className="material-symbols-outlined">
            close
          </span>
          <Title style={{ fontSize: "25px" }}>Contacto</Title>
          <Icons>
            <Icon src='./assets/instagram-logo-icone4.png' onClick={copyInstagram} /> Instagram
            {/* <Icon src='./assets/LinkedIn_icon_circle.svg.png' onClick={() => open("https://www.linkedin.com/in/sina-majnoon-programador-fullstack")} /> Linkedin */}
            <Icon src='./assets/whatsapp_icon_130788.png' onClick={copyPhoneNumber} /> Whatsap
            <Icon src='./assets/gmail-new-icon5198.jpg' onClick={() => open("https://mail.google.com/mail/u/0/#search/nou?compose=GTvVlcSKjDcxQgdBHcVzWVmFWfXRVHmQtTnNXzCskxBlSSzbTmZwFsnmlbZVBXfxRpsLHvkBqNXnL")} />
            email
          </Icons>
        </ContactContainer>
      )}
    </AppContainer>
  )
}

export default App
