import { Injectable } from '@angular/core';

import { ListService } from './list.service';

@Injectable({
    providedIn: 'root'
})

export class SidebarService {

    private sidebarId: string[] = [];
    private sidebarElements: any[] = [];

    constructor(private listService: ListService) {
    };

    addList(id: string): void {
        id = id.trim();
        if (this.sidebarId.indexOf(id) === -1 && id != "") {
            this.sidebarId.push(id);
            this.idToName(id);
        }
        else {
            console.log("This item already exists in Sidebar or is empty");
        }
    };

    getLists(): any[] {
        return this.sidebarElements;
    }

    getIdLists(): string[] {
        return this.sidebarId;
    }

    idToName(id: string): void {
        this.listService.getList(id).toPromise().then(list => {
            this.sidebarElements.push({ name: list.name, id: id });
        });
    }
}
