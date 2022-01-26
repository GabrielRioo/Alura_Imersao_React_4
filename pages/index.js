import appConfig from '../config.json';

function GlobalStyle() {
  return (
    <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        border-sizing: border-box;
      }

      body {
        font-family: 'Open Sans', sans-serif;
      }

      html,body, #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }

      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
    `}</style>
  )
}

function Title(props) {
  const Tag =  props.tag;
  return (
    <>
      <Tag>{props.children}</Tag>
    
      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.neutrals['400']};
        }
        `}</style>
    </>
  )
}

function HomePage() {
  return (
      <div>
        <GlobalStyle />
        <Title tag="h2">Boas vindas de volta!</Title>
        <h2>Discord - Alura Matrix</h2>
        
        

      </div>
    ) 
}

export default HomePage;