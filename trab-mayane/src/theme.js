
import { background, extendTheme } from "@chakra-ui/react"

//Aqui quis deixar on a possibilidade de darkmode do 
//dispositivo do usuário, mas começar com claro.
const config = {
    initialColorMode: 'light',
    useSystemColorMode: true,
}

//Set das configs globais do 'site'
//Decidi por uma img no fundo, mas deixei a cor pra caso desse errado
const styles = {
    global: {
        "html, body": {
            backgroundColor: "purple.900",
            backgroundImage: `url('https://gtwallpaper.org/sites/default/files/wallpaper/171118/minimalist-harry-potter-wallpapers-171118-177804-3871123.png')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "COVER",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            color: "gray.800",
            fontFamily: "'Helvetica Neue', sans-serif",
            lineHeight: "short",
        },
    },
}

const theme = extendTheme({ config, styles })

export default theme