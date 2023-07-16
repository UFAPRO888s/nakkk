const CONSENT = require("../../CONSENT");
const { ContentType } = require("../../CONSENT/gen-nodejs/TalkService_types");
const MessageMananger = require("../../Managers/MessageManager");
const { escapeRegExp } = require("../../util/Util");
const Message = require("../Message/Message");
const Channel = require("./Channel");

module.exports = class TextBaseChannel extends Channel {
    /**
     * 
     * @param {import("../Client")} client 
     * @param {*} data 
     */
    constructor(client,data){
        super(client,data)
        
        this.messages = new MessageMananger(this)

        if (data) this._patch(data);
    }
    
    async _patch(data){
        super._patch(data)
    }
    
    /**
     * Send Message to this channel
     * @param {String} text 
     * @param {?Message} options 
     * @return {Promise<Message>}
     */
     async send(text, options={}){
        if(!options['contentType']) options["contentType"] = ContentType['NONE']
        if(!options['contentMetadata']) options['contentMetadata'] = {}
        text+=""
        if(text) {
            let match;
            while (match = text.match(CONSENT.message.mention.regex)) {
                if(!options["contentMetadata"]["MENTION"]) options["contentMetadata"]["MENTION"] = {MENTIONEES: []}
                let start_index = match.index
                let user_id = match[0].slice(CONSENT.message.mention.offset_start,match[0].length-CONSENT.message.mention.offset_end)
                
                let replace_to = CONSENT.message.mention.replace(user_id)
                text = text.replace(escapeRegExp(match[0]),replace_to)
                options["contentMetadata"]["MENTION"]["MENTIONEES"].push({'S': (start_index)+"", 'E': (start_index + replace_to.length)+"", 'M': user_id})
            }
        }
        
        if(options["contentMetadata"]) {
            for (const k in options["contentMetadata"]) {
                if(typeof options["contentMetadata"][k] != String) {
                    if(typeof options["contentMetadata"][k] == "object") options["contentMetadata"][k] = JSON.stringify(options["contentMetadata"][k])
                    else options["contentMetadata"][k]+=""
                }
            }
        }

        let m = await this.client.api.sendMessage(0,{
            _from: this.client.user.id,
            to: this.id,
            text,
            ...options
        })
        let msg = this.messages.add(m,true,{id: m.id})
        this.client.emit('message', msg)
        return msg
    }
}