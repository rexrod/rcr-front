import { TestBed, inject } from '@angular/core/testing';
import { PhonePipe } from './phone.pipe';

describe('PhonePipe', () => {
    let pipe;

    // setup
    beforeEach(() => TestBed.configureTestingModule({
        providers: [PhonePipe]
    }));

    beforeEach(inject([PhonePipe], p => {
        pipe = p;
    }));

    // specs
    it('should work with empty string', () => {
        expect(pipe.transform('')).toEqual('');
    });

    it('should return null for letters and special characters', () => {
        expect(pipe.transform('abcdefghijlmnopqrstuvxz!@#$%*()_+')).toEqual('');
    });

    it('should formatt for phone number with 11 numbers', () => {
        expect(pipe.transform('92 9 6666 5555')).toEqual('(92) 96666-5555');
    });

    it('should formatt for phone number with 10 numbers', () => {
        expect(pipe.transform('92  6666 5555')).toEqual('(92) 6666-5555');
    });

    it('must not allow more than 11 numbers', () => {
        expect(pipe.transform('92  6666 5555 55555')).toEqual('(92) 66665-5555');
    });

    it('should no throw with invalid values', () => {
        // must use arrow function for expect to capture exception
        expect(() => pipe.transform(undefined)).not.toThrow();
        expect(pipe.transform(undefined)).toEqual('');
        expect(pipe.transform()).toEqual('');
    });
});
