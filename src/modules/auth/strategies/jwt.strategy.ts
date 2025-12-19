// on prend Injectable pour dire a Nest ouh c injectable w ykhdem
import { Injectable } from '@nestjs/common';

// on prend PassportStrategy bach niktbe JWT strategy mta3na
import { PassportStrategy } from '@nestjs/passport';

// ExtractJwt w Strategy bach nfakko token men header
import { ExtractJwt, Strategy } from 'passport-jwt';

// on prend secret men config, pas mettre hardcode lol 
import { jwtConstants } from '../../../config/jwt.config';

// injectable wkolchay ok
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

  // constructor ykhdem qd nest yiktib instance
  constructor() {

    // super bach nhot config l passport
    super({

      // heni n9ele prend token men header Authorization
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

      // secret bach verify token, lazm na3mlou match mta3 sign
      secretOrKey: jwtConstants.secret,
    });
  }

  // validate ykhdem automatically apres decode token
  async validate(payload: any) {

    // payload fih id w role 
    // nrejetih direct Nest ya3mlou request.user automatiquement
    return payload;
  }
}
