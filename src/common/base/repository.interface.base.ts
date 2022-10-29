export interface BaseInterfaceRepository<T> {
    create(data: T | any): Promise<T>;

    findOneById(id: number): Promise<T>;

    findByCondition(filterCondition: any): Promise<T>;

    findAll?(): Promise<T[]>;

    findAllByCondition?(): Promise<T[]>;

    remove?(id: number): Promise<T>;

    findWithRelations?(relations: any): Promise<T[]>;
}
