function PhysicsEngine() {
    this.calculateMovement = function(feetCount, gaitType, terrainType, speed, size) {
        let movementPattern = {};
        
        switch (gaitType) {
            case 'gallop':
                movementPattern.strideLength = 2 * size;
                break;
            case 'walk':
                movementPattern.strideLength = size;
                break;
            default:
                movementPattern.strideLength = 1.5 * size;
        }

        switch (terrainType) {
            case 'softMud':
                movementPattern.resistance = 0.8;
                break;
            case 'hardGround':
                movementPattern.resistance = 0.2;
                break;
            default:
                movementPattern.resistance = 0.5;
        }

        movementPattern.speed = speed / movementPattern.resistance;
        movementPattern.feetCount = feetCount;

        return movementPattern;
    };
}