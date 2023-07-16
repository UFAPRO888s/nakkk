const Base = require("../Base");
const CONSENT = require("../../CONSENT")
const {AvatarProfile} = CONSENT.thrift.TalkService_types
module.exports = class Base_User extends Base {
    constructor(client,data){
        super(client)

        if(data) this._patch(data)
        
    }
    get channel(){
        return this.client.channels.cache.get(this.id)
    }
    _patch(data){
        super._patch(data)
        /**
         * The ID of the User
         * @type {String}
         */
        this.id = data.mid||data.id;
        
        if('createdTime' in data) {
            /**
             * CreatedTime Of the User
             * @type {?Date}
             */
            this.createdTime = new Date(parseInt(data.createdTime));
        }
        if('displayName' in data) {
            /**
             * Name Of the User
             * @type {?String}
             */
            this.displayName = data.displayName;
        }
        if('phoneticName' in data) {
            /**
             * Name Of the User
             * @type {?String}
             */
            this.phoneticName = data.phoneticName;
        }
        if('pictureStatus' in data) {
            /**
             * @type {?String}
             */
            this.pictureStatus = data.pictureStatus;
        }
        if('picturePath' in data) {
            /**
             * @type {?String}
             */
            this.picturePath = data.picturePath;
        }
        if('musicProfile' in data) {
            /**
             * @type {?String}
             */
            this.musicProfile = data.musicProfile;
        }
        if('videoProfile' in data) {
            /**
             * @type {?String}
             */
            this.videoProfile = data.videoProfile;
        }
        if('avatarProfile' in data) {
            /**
             * @type {?AvatarProfile}
             */
            this.avatarProfile = data.avatarProfile;
        }
        if('statusMessageContentMetadata' in data) {
            /**
             * @type {?Object.<string,string>}
             */
            this.statusMessageContentMetadata = data.statusMessageContentMetadata;
        }
        
        if(this.id) {
            this.client.channels.add(this,true,{
                id: this.id
            })
        }

    }
    /**
     * When concatenated with a string, this automatically returns the user's mention instead of the User object.
     * @returns {string}
     */
    toString() {
        return CONSENT.message.mention.toString(this.id);
    }

}