---
title: "Descripción general de Kimi Claw Android"
slug: "kimi-claw-android-guide"
order: 3
extract_headings: true
preview: false
---

<SeoMeta
  title="Descripción general de Kimi Claw Android - Centro de ayuda de Kimi"
  description="Aprende a implementar OpenClaw en tu teléfono Android y convertirlo en un asistente remoto de IA disponible 24/7."
  ogType="article"
/>

# Descripción general de Kimi Claw Android

En este artículo se explica cómo implementar OpenClaw en teléfonos Android y convertir un teléfono que no uses en tu asistente remoto de IA disponible 24/7. Puedes controlar tu teléfono a distancia, usar apps, conectarte a dispositivos de hogar inteligente y crear tu propio asistente personalizado mediante apps de mensajería como Kimi, Feishu y WeChat.

Se recomienda implementar Kimi Claw Android en teléfonos que no uses para evitar conflictos de permisos con el uso diario. No actualices manualmente la versión de OpenClaw; las actualizaciones oficiales adaptadas se entregarán mediante las actualizaciones de versión dentro de la app.

## Introducción a Kimi Claw Android

<Frames
  src="./images/kimi-claw-android-guide/img-06.png"
/>

Requisitos del sistema:

| Elemento | Requisito |
| --- | --- |
| Sistema operativo | Android 8.0 o superior |
| Espacio de almacenamiento disponible | Al menos 5GB |
| Red | Se requiere una conexión de red estable |
| Cuenta | Suscripción Kimi Allegretto o superior |

<Callout type="info">
Se recomienda usar teléfonos que no utilices para evitar conflictos con el uso diario.
</Callout>

## Descargar e instalar
### Descargar Kimi Claw Android

Puedes descargarlo de las siguientes maneras:

#### Método 1: Escanea el código QR para descargarlo desde la página web.
Inicia sesión en [kimi.com](https://kimi.com), busca la entrada "Descargar Kimi Claw Android" y usa tu teléfono Android para escanear el código QR de la página y descargarlo.

<Frames
  src="./images/kimi-claw-android-guide/img-03.png"
/>

#### Método 2: Descárgalo directamente desde Google Play
Busca "Kimi Claw" en la tienda de apps del teléfono y completa la descarga.

#### Método 3: Descarga la app Kimi en el teléfono
Abre la app Kimi, toca Kimi Claw Android y también podrás vincular una instancia de OpenClaw existente.

### Configuración inicial 

La primera vez que abras Kimi Claw Android, verás una página de bienvenida. Después de revisar la siguiente información importante, toca "Iniciar configuración" para entrar al proceso de instalación.

- Implementación rápida de OpenClaw - Implementa OpenClaw en teléfonos locales para comunicarte mediante Kimi, Feishu, etc.
- Se recomienda usar un teléfono que no utilices - Kimi Claw Android requiere una red estable para funcionar, por lo que se recomienda usar un teléfono que no utilices.
- Úsalo de forma segura - OpenClaw puede implicar riesgos de privacidad y seguridad, así que úsalo con precaución.

Después de seleccionar que aceptas la Privacy Policy y el Acuerdo de usuario, continúa.

#### Paso 1: Otorgar permisos
Kimi Claw Android necesita los siguientes permisos para ejecutarse de forma estable en segundo plano. Toca "Autorizar" en cada uno para completar la autorización.

| Permisos | Explicación |
| --- | --- |
| Notificación del sistema | Mostrar el estado del gateway y recordatorios |
| Permisos de espacio de almacenamiento | Se requieren al menos 5GB de espacio disponible |
| Permiso de ejecución en segundo plano | Mantener el gateway en ejecución al pasar a segundo plano |

Como las rutas de configuración varían según la marca del teléfono, estos son los pasos generales:

1. Toca "Abrir configuración" para ir a la página de configuración del teléfono
2. Entra a la lista de administración de aplicaciones y selecciona Kimi Claw Android
3. Activa el interruptor de inicio automático
4. Selecciona "Permitir completamente el comportamiento en segundo plano" en Administración de consumo de energía
5. Vuelve a Kimi Claw Android y toca "Listo" para continuar la instalación

#### Paso 2: Configurar la cuenta de Kimi

1. Toca "Ir a configurar" para ir a la app Kimi y autorizar
2. Después de la autorización, Kimi creará automáticamente una clave API de Kimi Coding Plan para Kimi Claw Android
3. Si eres usuario gratuito, primero debes activar los beneficios de membresía. Toca "Ir a actualizar" para activar tu membresía.

#### Paso 3: Instalar OpenClaw

<Frames
  src="./images/kimi-claw-android-guide/img-08.png"
/>

Si la instalación falla, puedes tocar "Reinstalar" para intentarlo de nuevo. Si falla varias veces, toca "¿Tienes problemas? Ir a comentarios" para enviar el problema.

## Guía de uso del Dashboard

### Interfaz principal

<Frames
  src="./images/kimi-claw-android-guide/img-14.png"
/>

Una vez completada la configuración, entrarás a la interfaz principal del Dashboard, donde podrás ver la siguiente información:

- Estado del gateway de OpenClaw — Iniciando / Conectado / Detenido, y tiempo de ejecución
- Canales de chat — Lista de canales de comunicación conectados actualmente
- Registro de OpenClaw — Registro original de la operación de OpenClaw
- Usar conversación de Kimi — Abre la app Kimi, abre la interfaz de conversación correspondiente a Kimi Claw Android y cambia automáticamente al Claw correspondiente.

Si aparece un recordatorio de permisos en la parte superior del Dashboard, significa que algunos permisos no se otorgaron o vencieron. Sigue las indicaciones y completa la autorización elemento por elemento para asegurar el funcionamiento normal de Kimi Claw Android.

### Gestión de canales de chat

<Frames
  src="./images/kimi-claw-android-guide/img-33.png"
/>
En el Dashboard puedes administrar todos los canales de comunicación:

- Ver los canales conectados y sus estados (por ejemplo, Kimi - Conectado, Feishu - Conectado)
- Tocar "+ Conectar" para agregar un nuevo canal de chat
- Tocar un canal existente para ver los detalles o eliminarlo

<Callout type="info">
Mantén al menos un canal de chat para asegurar la comunicación normal con Kimi Claw Android.
</Callout>

### Registros de OpenClaw

- Buscar — Buscar contenido del registro por palabra clave
- Filtrar nivel — Filtrar por nivel de registro (Información / Advertencia / Error, etc.)
- Desplazamiento automático al final — Desplazarse automáticamente al registro más reciente
- Actualizar — Actualizar manualmente el contenido del registro

<Frames
  src="./images/kimi-claw-android-guide/img-16.png"
/>

### Configuración

<Frames
  src="./images/kimi-claw-android-guide/img-21.png"
/>
Toca Configuración para entrar a la página de configuración:

**Capa funcional:**

- Habilidades de ClawHub: Asociarse automáticamente con el sitio web oficial de ClawHub y administrar las habilidades disponibles para Kimi Claw Android
- Espacio de trabajo de OpenClaw: Entrar al directorio local de archivos de configuración de OpenClaw y editar preferencias personales

**Capa del sistema:**

<Frames
  src="./images/kimi-claw-android-guide/backup.png"
/>
- Copia de seguridad y restauración: Hacer una copia de seguridad de la configuración y el historial actuales de OpenClaw, y permitir restaurar configuraciones y registros anteriores
- Servicio de accesibilidad: Supervisar los permisos del servicio de accesibilidad del teléfono
- Permiso de ejecución en segundo plano: Supervisar el permiso de ejecución en segundo plano del teléfono
- Actualización de versión: Supervisar la versión; toca para actualizar automáticamente

**Acerca de:**

- Ayuda: Instrucciones sobre recomendaciones básicas de uso
- Comentarios: Enviar comentarios
- Acuerdo de usuario: Leer el Acuerdo de usuario
- Privacy Policy: Leer Privacy Policy

#### Habilidades de ClawHub

Se asocia automáticamente con el sitio web oficial de ClawHub y administra las habilidades disponibles para Kimi Claw Android. Puedes descargar e instalar habilidades para ampliar las capacidades de Claw.

#### Espacio de trabajo de OpenClaw

<Frames
  src="./images/kimi-claw-android-guide/img-19.png"
/>

#### Copia de seguridad y recuperación

Kimi Claw Android ofrece funciones de copia de seguridad automática y manual para garantizar que tu historial y configuración de OpenClaw no se pierdan.

Copia de seguridad automática

Kimi Claw Android hará automáticamente, a intervalos regulares, una copia de seguridad del historial y la configuración actuales de OpenClaw, y los empaquetará en un archivo comprimido para almacenarlos. No necesitas hacer nada manualmente; el sistema lo completará automáticamente en segundo plano.

Copia de seguridad manual:

Si quieres guardar el estado de un momento específico, también puedes tocar Copia de seguridad para guardar manualmente una instantánea del historial y la configuración actuales. Toca  Copia de seguridad  para exportar todas las copias de seguridad de configuración actuales.

**Restaurar configuración:**

Kimi Claw Android permite restaurar estados de configuración anteriores. También admite tanto el estado de copia de seguridad automática como el estado de copia de seguridad activa de Kimi Claw Android.

En los siguientes casos, puedes restaurar un estado anterior con la función de recuperación:

- Cuando al desinstalar o reinstalar la app desaparezcan los registros históricos, se pueden restaurar los registros anteriores
- Cuando sea necesario cambiar la configuración de Claw, puedes restaurarla al estado de configuración guardado previamente
- Al cambiar de teléfono y volver a implementar, basta con importar el archivo de copia de seguridad para restaurar

Toca el archivo de copia de seguridad correspondiente en la lista de copias y podrás restaurar automáticamente los registros históricos y las configuraciones a ese punto en el tiempo, asegurando que los registros anteriores no se borren.

## Configurar canales de chat

### Kimi
Kimi es el canal de comunicación predeterminado y se conectará automáticamente después de completar la configuración de la cuenta de Kimi durante el proceso de configuración inicial, sin operaciones adicionales.

Una vez finalizadas la instalación y la configuración, tu Kimi Claw Android aparecerá automáticamente en la página de cambio de Bot del cliente web (kimi.com). Al tocar para cambiar, el avatar y el hilo de chat se cambiarán de forma sincronizada.

Kimi Claw Android solo permite editar el nombre del Bot y eliminar el Bot en la administración de Bot.

### Feishu
<Frames
  src="./images/kimi-claw-android-guide/img-25.png"
/>

Admite tres métodos de conexión:

Método 1: Abrir Feishu para crear

Toca "Abrir Feishu para crear", completa la creación de la app en Feishu según las indicaciones y el estado se actualizará automáticamente a "Conectado".

Método 2: Escanear el código QR para crear

1. Toca "Escanear código QR para crear"
2. Usa Feishu para escanear el código QR
3. Completa la creación de la aplicación de Feishu en el navegador

**Método 3: Ingresar manualmente la información del Bot**

1. Toca "Ingresar manualmente la información del Bot"
2. Ingresa el App ID y el App Secret
3. Toca "Agregar" para completar la conexión

### WeChat
El canal de WeChat necesita que primero se instale WeChat Claw del lado de WeChat; Kimi Claw Android se comunicará a través de la terminal WeChat Claw.

Primero debes completar la instalación de WeChat Claw siguiendo la guía oficial de WeChat. La instalación se completa cuando WeChat ClawBot aparece en la página de chat.

Entra a Kimi Claw Android, conecta el canal de WeChat y completa el proceso escaneando el código QR con WeChat.

### Telegram

<Frames
  src="./images/kimi-claw-android-guide/img-34.png"
/>

Kimi Claw Android admite la integración con Telegram; primero debes obtener tu bot token y tu ID de usuario.

## Automatización

Una de las capacidades principales de Kimi Claw Android es controlar apps en el teléfono para completar diversas tareas. Después de enviar instrucciones a Claw mediante canales de chat como Kimi, Feishu y WeChat, Claw abrirá automáticamente la app correspondiente en el teléfono, realizará una serie de operaciones como lo haría una persona real y, finalmente, completará las tareas que especifiques.

### Cómo funciona

Cuando envías instrucciones de tarea a Claw mediante el canal de chat, Claw hará lo siguiente:

1. Entender los requisitos de tu tarea
2. Abrir automáticamente la app correspondiente en el teléfono
3. Completar las tareas paso a paso simulando operaciones de usuario (tocar, deslizar, ingresar texto, etc.)
4. Tomar capturas de pantalla durante la ejecución para que puedas revisar el proceso
5. Informarte los resultados después de completar la tarea

### Escenarios de uso típicos

#### Compras y consumo

Buscar productos, agregar al carrito, ver pedidos, reclamar descuentos, etc., en plataformas como Taobao, Tmall y Meituan.

#### Viajes y navegación

Consultar tarifas de taxi, revisar horarios del metro, buscar hoteles cercanos, reservar viajes, etc., en Amap.

#### Redes sociales y contenido

Revisar mensajes, explorar contenido, buscar productos, realizar operaciones interactivas, etc., en plataformas como WeChat, Rednote y Douyin.

## Consejos de uso

### Controlar el teléfono mediante software de chat

Una vez completada la configuración, puedes enviar comandos a Claw en Kimi, Feishu y WeChat para controlar de forma remota aplicaciones en teléfonos Android. Por ejemplo:

- Ayúdame a abrir WeChat y revisar los mensajes más recientes
- Abre el mapa y busca restaurantes cercanos
- "Ayúdame a revisar el calendario para ver qué hay en la agenda de hoy"

### Usar habilidades de ClawHub

<Frames
  src="./images/kimi-claw-android-guide/img-18.png"
/>
Kimi Claw Android incluye ClawHub, una biblioteca de habilidades integrada. Puedes administrar e instalar habilidades en la configuración para ampliar las capacidades de Claw.

Escenarios adecuados para usar habilidades:
- Organización de información: agregación de noticias, comparación de productos competidores
- Análisis de datos: revisión de mercado, interpretación de datos
- Automatización de flujos de trabajo: un proceso completo desde la descomposición de requisitos hasta la entrega del resultado

### Varios canales en línea simultáneamente
Puedes conectar varios canales, como Kimi, Feishu y WeChat, al mismo tiempo, y chatear con Claw desde distintas apps de mensajería. Solo toca "+ Conectar" en la sección Administración de canales del Dashboard para agregarlos.

## Seguridad y aplicaciones restringidas

### Instrucciones de seguridad

Antes de usar Kimi Claw Android, ten en cuenta las siguientes precauciones de seguridad:

1. Usa un teléfono que no utilices — Kimi Claw Android ocupará permisos del sistema del teléfono, lo que puede afectar el uso diario. Se recomienda usar un teléfono que no utilices.

2.  Aislamiento de datos sensibles — Kimi Claw Android leerá datos de archivos locales; limpia o aísla con anticipación la información sensible.

3. Protección de aplicaciones financieras — El sistema bloqueó automáticamente el acceso a aplicaciones bancarias, de pago, valores y seguros para proteger los fondos.

### Lista de aplicaciones restringidas

Por motivos de seguridad financiera y privacidad, Kimi Claw Android bloquea automáticamente el acceso a las siguientes categorías de apps y no permite operarlas de forma remota:

1. Social

| Paquete | Descripción del riesgo |
| --- | --- |
| wechat | Involucra funciones sociales privadas y de pago importantes |

2. Banca

| Paquete | Nombre de la app | Descripción del riesgo |
| --- | --- | --- |
| com.android.bankabc | abc, Agricultural Bank of China | Agricultural Bank of China, que permite operaciones como transferencias y gestión patrimonial |
| com.bankcomm.main | bocom, Bank of Communications | Bank of Communications, que admite operaciones como transferencias y gestión patrimonial |
| com.bjbk.im | Bank of Beijing | Bank of Beijing, que permite operaciones como transferencias y gestión patrimonial |
| com.cebbank.im | Everbright Bank | China Everbright Bank, que permite operaciones como transferencias y gestión patrimonial |
| com.cgb.im | Guangfa Bank | Guangfa Bank, que permite operaciones como transferencias y gestión patrimonial |
| com.chinamworld.bocmbci | boc, Bank of China | Bank of China, uno de los cuatro grandes bancos |
| com.chinamworld.main | CCB, China Construction Bank | China Construction Bank, uno de los cuatro grandes bancos |
| com.cib.im | Industrial Bank | Industrial Bank, que permite operaciones como transferencias y gestión patrimonial |
| com.citic.im | China CITIC Bank | China CITIC Bank, que admite operaciones como transferencias y gestión patrimonial |
| com.cmbc.im | Minsheng Bank | China Minsheng Bank, que permite operaciones como transferencias y gestión patrimonial |
| com.cmbchina.ccd.pluto.customerView | cmb, China Merchants Bank | China Merchants Bank, que admite operaciones como transferencias y gestión patrimonial |
| com.hxb.im | Huaxia Bank | Huaxia Bank, que permite operaciones como transferencias y gestión patrimonial |
| com.hzbk.im | Hangzhou Bank | Hangzhou Bank, que admite operaciones como transferencias y gestión patrimonial |
| com.icbc | ICBC, Industrial and Commercial Bank of China | Industrial and Commercial Bank of China, uno de los cuatro grandes bancos |
| com.jsbk.im | Jiangsu Bank | Jiangsu Bank, que admite operaciones como transferencias y gestión patrimonial |
| com.nbbk.im | Ningbo Bank | Ningbo Bank, que admite operaciones como transferencias y gestión patrimonial |
| com.pingan.paces.cloud | Ping An Pocket Bank | Cliente móvil de Ping An Bank |
| com.psbc.im | Postal Savings Bank | Postal Savings Bank of China |
| com.shbk.im | Shanghai Bank | Shanghai Bank, que admite operaciones como transferencias y gestión patrimonial |
| com.spdb.im | Shanghai Pufa Bank | Shanghai Pufa Development Bank |

3. Pagos

| Paquete | Nombre de la app | Descripción del riesgo |
| --- | --- | --- |
| com.eg.android.AlipayGphone | Alipay | Alipay, la plataforma de pagos de terceros más grande de China |
| com.paypal.android.p2pmobile | paypal | PayPal, la plataforma de pagos en línea más grande del mundo |
| com.unionpay | ysf, Cloud Flash Payment | China UnionPay Cloud Flash Payment, un instrumento de pago con tarjeta bancaria |
| com.squareup.cash | cashapp | Cash App, una plataforma estadounidense de pagos móviles |
| com.venmo | venmo | Venmo, una plataforma estadounidense de pagos P2P |
| com.google.android.apps.walletnfcrel | googlewallet, wallet | Google Wallet, la billetera de pagos de Google |

4. Valores

| Paquete | Nombre de la app | Descripción del riesgo |
| --- | --- | --- |
| com.citics.pbm | CITIC, Xin E Tou | Cliente de trading de CITIC Securities |
| com.cmschina.stock | China Merchants Securities | Cliente de trading de China Merchants Securities |
| com.csc108.newpda | CITIC Construction Investment | Cliente de trading de CITIC Construction Investment Securities |
| com.dfzq.stock | Orient Securities | Cliente de trading de Orient Securities |
| com.eastmoney.android.berlin | eastmoney, Orient Fortune | East Money, plataforma de trading de acciones/fondos |
| com.ebscn.stock | ebscn, Golden Sunshine | Cliente de trading de Everbright Securities |
| com.foundersc.stock | founder, Xiaofang | Cliente de trading de Founder Securities |
| com.gf.gfstocks | GF Easy Gold Rush | Cliente de trading de GF Securities |
| com.guosen.stock | guosen, Golden Sun | Cliente de trading de Guoxin Securities |
| com.guotai.junan.guiyang | Guotai Junan | Cliente de trading de Guotai Junan Securities |
| com.hexin.plat.android | ths, Flush | Flush, plataforma de trading y mercado de acciones/fondos |
| com.htsc.mdc | Huatai, Zhangle Fortune Link | Cliente de trading de Huatai Securities |
| com.htsec.android | Haitong Securities | Cliente de trading de Haitong Securities |
| com.pingan.stock | Ping An Securities | Cliente de trading de Ping An Securities |
| com.tfzq.stock | Tianfeng Securities | Cliente de trading de Tianfeng Securities |
| com.xueqiu.android | xueqiu, Snowball | Xueqiu, comunidad de acciones y plataforma de trading |
| com.xyzq.stock | Industrial Securities | Cliente de trading de Industrial Securities |

5. Seguros / Finanzas

| Paquete | Nombre de la app | Descripción del riesgo |
| --- | --- | --- |
| com.pingan.lifeinsurance | Ping An Financial Services Client | Ping An Insurance of China, que permite operaciones como compra de seguros y liquidación de reclamaciones |
| com.jd.jrapp | JD Finance | JD Finance ofrece servicios financieros como gestión patrimonial, préstamos y pagos |

## Funciones admitidas y no admitidas

### Funciones admitidas

| Función | Descripción |
| --- | --- |
| Control remoto de aplicaciones móviles | Usar apps de un teléfono móvil de forma remota mediante comandos en software de chat |
| Comunicación multicanal | Admite comunicación con Claw mediante Kimi, Feishu y WeChat |
| Visualización de registros en tiempo real | Ver los registros de operación del gateway de OpenClaw, con búsqueda y filtrado por nivel |
| Copia de seguridad y restauración de configuración | Hacer una copia de seguridad de la configuración actual, que puede restaurarse tras reinstalar o cambiar de dispositivo |
| Monitoreo del estado del gateway | Ver en tiempo real el estado de conexión y la duración de ejecución del gateway de OpenClaw |
| Administración de canales | Agregar, ver y eliminar canales de comunicación |
| Dashboard de OpenClaw | Administrar OpenClaw mediante el Dashboard integrado |

### Funciones no admitidas y limitaciones

| Área | Limitación |
| --- | --- |
| Compatibilidad de plataforma | Actualmente solo se admiten dispositivos Android; iOS no está admitido |
| Membresía | Disponible solo para miembros Kimi Allegretto o superior |
| Apps financieras | Las aplicaciones relacionadas con banca, pagos, valores y seguros tienen prohibido el acceso (consulta el Capítulo 6 para más detalles) |
| Administración de Bot | El Bot de Kimi Claw Android solo permite editar el nombre y eliminarlo; no admite otras configuraciones de Bot |
| Terminal | Actualmente, Kimi Claw Android no ofrece capacidad para operaciones directas por línea de comandos |

## Preguntas frecuentes (FAQ)

<Callout type="info">
Lo siguiente sirve como referencia para Kimi Claw Android.
</Callout>

### Instalación y configuración

#### ¿Qué debo hacer si falla la instalación de OpenClaw?

- Asegúrate de que haya suficiente espacio de almacenamiento (al menos 5GB) y no salgas de la aplicación ni bloquees la pantalla durante el proceso de instalación
- Toca "Reinstalar" para volver a intentarlo
- Si falla varias veces, toca "¿Tienes un problema? Ir a comentarios" para enviar el problema

#### Después de autorizar los permisos, ¿el estado no se actualiza?

- En algunas marcas de teléfonos, los permisos otorgados requieren reiniciar la app para surtir efecto
- Vuelve a Kimi Claw Android. Si el estado no se actualizó, intenta cerrar y volver a abrir la app

#### ¿Los usuarios gratuitos pueden usarlo?

- Actualmente, para usar Kimi Claw Android necesitas activar los beneficios de membresía Kimi Allegretto o superior
- Toca "Ir a actualizar" en los pasos de configuración de la cuenta de Kimi para activarla

#### Al restaurar la configuración, aparece "El archivo de configuración no es válido"?

- Es posible que el archivo de copia de seguridad esté dañado o provenga de una versión incompatible
- Usa "Configuración con un clic desde la app Kimi" para configurar de nuevo

### Conectividad y estabilidad

#### ¿Por qué el estado del gateway siempre muestra "Iniciando"?

- Revisa si la conexión de red funciona correctamente
- Confirma que se hayan otorgado todos los permisos necesarios (notificaciones, optimización de batería, almacenamiento, inicio automático)
- Intenta tocar "Copia de seguridad y reinicio" en la configuración para reiniciar el servicio del gateway

#### ¿El gateway se desconectó de repente?

- Revisa si el teléfono entró en modo de ahorro de energía, lo que puede provocar que se cierren las apps en segundo plano
- Confirma que "Ignorar optimización de batería" y "Permiso de inicio automático" se hayan otorgado correctamente
- Revisa el estado del gateway en el Dashboard. Si muestra "Detenido", toca Reiniciar

#### ¿Kimi Claw Android pierde la conexión después de bloquear el teléfono?

- Esto suele ocurrir porque la estrategia de optimización de batería del teléfono cierra las aplicaciones en segundo plano
- Asegúrate de haber completado las siguientes configuraciones:
  - Ignorar optimización de batería - Autorizado
  - Permiso de inicio automático — Habilitado
  - Administración de consumo de energía — Selecciona "Permitir completamente el comportamiento en segundo plano"

### Canales y comunicación

#### ¿Se pueden conectar varios canales de chat simultáneamente?

- Sí. Puedes conectar varios canales, como Kimi, Feishu, WeChat, etc., al mismo tiempo
- Solo toca "+ Conectar" en la administración de canales del Dashboard para agregarlo
- Mantén al menos un canal para asegurar la comunicación normal

#### Después de escanear el código QR de Feishu, ¿sigue esperando actualizaciones de estado?

- Asegúrate de haber completado el proceso de creación de la aplicación de Feishu en tu navegador
- Si no hay actualización después de mucho tiempo, puedes intentar conectarte ingresando manualmente la información del Bot

#### ¿Falló la conexión de WeChat?

- Confirma que las credenciales de WeChat Claw estén completas correctamente y coincidan con los valores de la configuración del lado de WeChat
- Sigue la guía oficial de configuración de WeChat Claw para regenerar y volver a vincular las credenciales si es necesario
- Revisa si la red móvil puede acceder normalmente a los servicios de WeChat

#### ¿Por qué no puedo ver Kimi Claw Android en la app Kimi?

- Confirma que el proceso de configuración inicial se haya completado por completo (otorgamiento de permisos → instalación de OpenClaw → configuración de la cuenta de Kimi)
- Revisa si el estado del gateway en el Dashboard es "Conectado"
- Intenta actualizar la lista de Bot en la app Kimi

### Uso de funciones

#### ¿Por qué algunas aplicaciones no se pueden operar de forma remota?

- Por motivos de seguridad, el sistema bloqueó automáticamente el acceso a aplicaciones financieras como banca, pagos, valores y seguros
- Para ver la lista completa, consulta el Capítulo 6, "Lista de aplicaciones restringidas".

#### ¿Por qué necesitamos usar teléfonos que no utilizamos?

- Kimi Claw Android puede ocupar permisos operativos del teléfono durante la ejecución, lo que puede afectar tu uso normal
- Usar un teléfono de repuesto puede evitar conflictos de permisos y proteger tus datos privados

#### ¿Cómo volver a implementar después de cambiar de teléfono?

1. Exporta el archivo de configuración en Dashboard → Configuración → Copia de seguridad y restauración en el teléfono anterior
2. Instala Kimi Claw Android en el teléfono nuevo
3. Selecciona "Restaurar configuración" en el Paso 3 e importa el archivo de copia de seguridad anterior.

#### ¿Cómo ver el estado de ejecución de Kimi Claw Android?

- En la interfaz principal del Dashboard, puedes ver el estado del gateway y el tiempo de ejecución
- Toca "Registro en tiempo real" para ver registros de operación detallados
- Con las funciones de búsqueda y filtrado por nivel de los registros, puedes localizar problemas rápidamente

### Actualización y versión

#### ¿Cómo actualizar Kimi Claw Android?

- Revisa y actualiza a la versión más reciente en Dashboard → Configuración → "Actualización de versión"
- Se recomienda realizar la actualización en un entorno Wi-Fi

#### ¿Puedo actualizar manualmente la versión de OpenClaw?

- No se recomienda la actualización manual. Actualizar manualmente puede provocar problemas de compatibilidad
- El equipo oficial enviará la actualización mediante una notificación dentro de la app una vez completada la adaptación

## Comentarios y ayuda

Si encuentras algún problema o tienes sugerencias durante el uso:

### Comentarios dentro de la app

- Dashboard → Configuración → Comentarios del usuario
- Página de instalación de OpenClaw → "Si tienes problemas, envía comentarios"

Incluye lo siguiente al enviar comentarios:

- Tu ID de Kimi Claw Android (visible al tocar el canal Kimi)
- Modelo del dispositivo y versión de Android
- Descripción del problema y captura de pantalla

<Callout type="info">
Proporcionar el ID de Kimi Claw Android ayuda a los técnicos a localizar problemas rápidamente, así que inclúyelo cuando envíes comentarios.
</Callout>
