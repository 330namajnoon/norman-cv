import { useState } from 'react'
import emailjs from "@emailjs/browser"
import { AboutMi, AppContainer, CVLink, ContactButton, ContactContainer, Details, FullName, HLine, Icon, Icons, InfoBox, ProfileImage, Title, TransparentBox } from './style'

function App() {
  const [shiwContact, setShowContact] = useState<boolean>(false);

  const sendEmail = async () => {
    function get0(n: number) {
      return n < 10 ? "0" + n : n;
    }
    const date = new Date();
    const tostring = `${get0(date.getDate())}/${get0(date.getMonth())}/${get0(date.getFullYear())} ${get0(date.getHours())}:${get0(date.getMinutes())}`
    const response = await emailjs.send("service_1nbwmi8", "template_1rsjlxn", {
      from_name: "TARJETA DE PRESENTACION",
      message: {
        date: tostring,
        text: "Se ha descargado tu curiculum!!"
      },
      email: "sina.cappac@gmail.com",
    }, { publicKey: "H66sPlZP-6b8E53Oc" });
  }

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText("+34643862337").then((res) => {
      alert("Se ha copiado el numero de telefono");
    })
  }

  const copyInstagram = () => {
    navigator.clipboard.writeText("@sina.majnoonhjk").then((res) => {
      alert("Se ha copiado el Id de usuario");
    })
  }

  return (
    <AppContainer style={{ backgroundImage: "url(./assets/norman_image.jpg)" }}>
      <Details>
        <TransparentBox />
        <InfoBox>
          <FullName>
            Norman
          </FullName>
          <Title>
            Barman
          </Title>
          <HLine />
          <AboutMi>
            SOBRE MI
            <h2>
              ¡Hola! Soy Norman, un apasionado barman con una amplia experiencia en el sector de la hostelería. Originario de una rica herencia multicultural, mi idioma nativo es el árabe, pero también tengo un excelente dominio del inglés y español. Estas habilidades lingüísticas me han permitido conectar de manera auténtica con una amplia gama de clientes internacionales, creando experiencias memorables para ellos.
            </h2>
          </AboutMi>
          <HLine />
          <CVLink onClick={sendEmail}>
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
            <Icon src='./assets/LinkedIn_icon_circle.svg.png' onClick={() => open("https://www.linkedin.com/in/sina-majnoon-programador-fullstack")} /> Linkedin
            <Icon src='./assets/whatsapp_icon_130788.png' onClick={copyPhoneNumber} /> Whatsap
            <Icon src='./assets/gmail-new-icon5198.jpg' onClick={() => open("https://mail.google.com/mail/u/1/#inbox/FMfcgzGxRxDZFtkXqMtvLQWpZHpDrRph?compose=CllgCHrhTxDKGrrlRzcgVwzmcJfQfxjdpsXltNcgDCGBPRTwmwsKPJPQjKCVwwTBZXwGjdxgfcg")} />
            Gmail
          </Icons>
        </ContactContainer>
      )}
    </AppContainer>
  )
}

export default App
