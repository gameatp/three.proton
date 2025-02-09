(function(Proton, undefined) {
    /**
     * PointZone is a point zone
     * @param {Number|Vector3D} x - the center's x value or a Vector3D Object
     * @param {Number} y - the center's y value
     * @param {Number} z - the center's z value  
     * @example 
     * var pointZone = new Proton.PointZone(0,30,10);
     * or
     * var pointZone = new Proton.PointZone(new Proton.Vector3D(0,30,10));
     * @extends {Zone}
     * @constructor
     */
    function PointZone(a, b, c) {
        var x, y, z;
        PointZone._super_.call(this);

        if (Proton.Util.isUndefined(a, b, c)) {
            x = y = z = 0;
        } else {
            x = a;
            y = b;
            z = c;
        }

        this.x = x;
        this.y = y;
        this.z = z;
        this.type = "point"
    }

    Proton.Util.inherits(PointZone, Proton.Zone);
    PointZone.prototype.getPosition = function() {
        this.vector.x = this.x;
        this.vector.y = this.y;
        this.vector.z = this.z;
        return this.vector;
    }
    PointZone.prototype.fromJson = function(json) {
        this.x = json.position[0];
        this.y = json.position[1];
        this.z = json.position[2];
        return this;
    }
    PointZone.prototype.toJson = function() {
        return {
            type: this.type,
            position: [this.x, this.y, this.z],
        }
    }
    PointZone.prototype.crossing = function(particle) {
        if (this.log) {
            console.error('Sorry PointZone does not support crossing method');
            this.log = false;
        }
    }

    Proton.PointZone = PointZone;
})(Proton);
