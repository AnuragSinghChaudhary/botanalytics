const MicrosoftBotFramework = require('./platforms/microsoft');
const FacebookMessenger = require('./platforms/facebook');
const GoogleAssistant = require('./platforms/google');
const AmazonAlexa = require('./platforms/amazon.alexa');
const AmazonLex = require('./platforms/amazon.lex');
const BotkitMiddlewares = require('./platforms/botkit');
const Viber = require('./platforms/viber');
const Kik = require('./platforms/kik');

module.exports.MicrosoftBotFramework = MicrosoftBotFramework;
module.exports.FacebookMessenger = FacebookMessenger;
module.exports.GoogleAssistant = GoogleAssistant;
module.exports.AmazonAlexa = AmazonAlexa;
module.exports.AmazonAlexa = AmazonLex;
module.exports.BotkitMiddlewares = BotkitMiddlewares;
module.exports.Viber = Viber;
module.exports.Kik = Kik;