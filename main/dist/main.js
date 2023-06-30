"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.enableCors({
        origin: 'http://localhost:4200'
    });
    app.connectMicroservice({
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: ['amqps://xvpsimiz:Lhs1PQyvSRvqHnvub1lQdwEz_Bgx06dW@rattlesnake.rmq.cloudamqp.com/xvpsimiz'],
            queue: 'main_queue',
            queueOptions: {
                durable: false
            },
            port: 8001
        },
    });
    app.startAllMicroservices();
    await app.listen(8001);
}
bootstrap();
//# sourceMappingURL=main.js.map