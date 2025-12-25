function PhysicsEngine() {
    this.calculateMovement = function(feetCount, gaitType, terrainType, speed, size) {
        let movementPattern = {};

        // Basic calculations based on input parameters
        if (terrainType === 'soft mud') {
            movementPattern.slipFactor = 0.8;
        } else if (terrainType === 'hard ground') {
            movementPattern.slipFactor = 0.2;
        }

        switch (gaitType) {
            case 'alternating':
                movementPattern.strideLength = size * 1.5;
                break;
            case 'walking':
                movementPattern.strideLength = size * 1.0;
                break;
            case 'galloping':
                movementPattern.strideLength = size * 2.0;
                break;
            default:
                movementPattern.strideLength = size * 1.5;
        }

        movementPattern.timePerStride = 1 / speed;

        return movementPattern;
    };
}