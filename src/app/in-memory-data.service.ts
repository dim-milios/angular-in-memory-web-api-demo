import { Injectable } from "@angular/core";
import { faker } from "@faker-js/faker/locale/el";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { IPost, IUser } from "./interfaces";

@Injectable({
    providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const users: IUser[] = [];
        const posts: IPost[] = [];        

        for (let i = 0; i < 20; i++) {
            users.push({
                id: faker.number.int(),
                email: faker.internet.email(),
                fullName: faker.person.fullName(),
            });
        }

        for (let i = 0; i < 20; i++) {
            posts.push({
                id: faker.number.int(),
                author: users[i],
                title: faker.company.catchPhrase(),
                content: faker.lorem.paragraphs(3),
                createdAt: faker.date.between({ from: '2024-01-01', to: new Date()}),
                likes: faker.number.int({ min: 0, max: 10_000}),
                shares: faker.number.int({ min: 0, max: 1_000}),
                updatedAt: faker.date.between({ from: '2024-01-01', to: new Date()}),
            });
        }

        return { users, posts };
    }
}