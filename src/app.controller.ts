import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('entity')
export class AppController {
  private entities = []; 
  @Get()
  findAll(): any[] {

    return this.entities;
  }

  @Get(':id')
  findOne(@Param('id') id: string): any {

    return this.entities.find((entity) => entity.id === id);
  }

  @Post()
  create(@Body() entity: any): string {

    this.entities.push(entity);
    return 'Entity created';
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() entity: any): string {

    const index = this.entities.findIndex((e) => e.id === id);
    if (index > -1) {
      this.entities[index] = entity;
    }
    return 'Entity updated';
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {

    const index = this.entities.findIndex((e) => e.id === id);
    if (index > -1) {
      this.entities.splice(index, 1);
    }
    return 'Entity removed';
  }
}
