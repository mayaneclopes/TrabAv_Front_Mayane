
import { extendTheme } from "@chakra-ui/react"

//Aqui quis deixar on a possibilidade de darkmode do 
//dispositivo do usuário, mas começar com claro.
const config = {
    initialColorMode: 'light',
    useSystemColorMode: true,
}

//Set das configs globais do 'site'
const styles = {
    global: {
        "html, body": {
            backgroundColor: "blue.100",
            color: "gray.500",
            fontFamily: "'Helvetica Neue', sans-serif",
            lineHeight: "short",
        },
    },
}

const theme = extendTheme({ config, styles })

export default theme