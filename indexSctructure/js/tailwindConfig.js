        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        cubic: {
                            dark: '#0f0f0f',    // Fondo oscuro principal
                            darker: '#151515',   // Fondo de barras laterales
                            primary: '#e8e8e8',  // Color primario (botones)
                            accent: '#1a1a1a',   // Color de acento para hover
                            border: '#252525',   // Color de bordes
                            text: {
                                primary: '#e0e0e0',  // Texto principal
                                secondary: '#b0b0b0', // Texto secundario
                                muted: '#888888'     // Texto atenuado
                            }
                        }
                    },
                    borderRadius: {
                        'cubic': '8px',
                        'cubic-lg': '16px'
                    }
                }
            }
        }