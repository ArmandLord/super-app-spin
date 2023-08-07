import '@testing-library/jest-native/extend-expect';
import {it, describe} from '@jest/globals';

const TITLE_TEST_ID = 'title-test-id';
const FILTER_ALL_TEST_ID = 'filter-all-test-id';
const FILTER_POINTS_EARNED_TEST_ID = 'filter-points-earned-test-id';
const FILTER_POINTS_USED_TEST_ID = 'filter-points-used-test-id';
const TITLE_GROUP_ITEMS_TODAY_TEST_ID = 'title-group-items-today-test-id';
const TITLE_GROUP_ITEMS_YESTERDAY_TEST_ID = 'title-group-items-yesterday-test-id';
const TITLE_GROUP_ITEMS_LAST_WEEK_TEST_ID = 'title-group-items-last-week-test-id';
const TITLE_GROUP_ITEMS_LAST_MONTH_TEST_ID = 'title-group-items-last-month-test-id';

describe('Screen Home', () => {
    
    describe('Renders', () => {
        // it('', () => { expect(); });
        // Filtros generales de movimientos
        //     Todos
        //     Ganados
        //     Usados
        // Lista de movimientos
        //     Lista infinita
        //     Spinner de carga
        // Ordenar por fecha
        //     Al día
        //     Un día anterior
        //     Por semana
        //     Por mes
        // Botón de retorno

        describe('Filtrar movimientos', () => {
            it('Mostrar el filtro Todos', () => {

            });
            it('Mostrar el filtro Ganados', () => {

            });
            it('Mostrar el filtro Usados', () => {

            });
        });
        describe('Lista de movimientos', () => {
            it('Lista infinita', () => {

            });
            it('Spinner de carga', () => {

            });
        });
        describe('Ordenar por fecha', () => {
            it('Al día', () => {

            });
            it('Un día anterior', () => {

            });
            it('Por semana', () => {

            });
            it('Por mes', () => {

            });
        });
        describe('Botón de retorno', () => {
            it('El botón de retorno aparece en pantalla', () => {

            });
        });
    });

    describe('Events', () => {});
    
});
