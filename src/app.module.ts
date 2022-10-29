import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DatabaseModule } from "./database/database.module";
import { UserModule } from "./modules/user/user.module";
import { CategoryModule } from "./modules/category/category.module";
import { TransactionModule } from "./modules/transaction/transaction.module";
import { AuthenticationModule } from "./authentication/authentication.module";
import { EmailModule } from "./email/email.module";

@Module({
    imports: [
        DatabaseModule,
        UserModule,
        CategoryModule,
        TransactionModule,
        AuthenticationModule,
        EmailModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
