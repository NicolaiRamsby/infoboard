<template>
    <div class="element-wrapper">
        <div class="element-box calendar">
            <headline :headline="headline.title" :headlineMeta="headline.meta" :icon="headline.icon"></headline>
            <div class="calendar-app-wrapper">
                <div v-for="date in dates">
                    <div class="date-divider">
                        <div class="dd-left">{{ date.date | moment("dddd") }}</div>
                        <div class="dd-right">{{ date.date | moment("D. MMMM") }}</div>
                    </div>
                    <div class="element-content calendar-white" v-for="event in filteredEvents" v-if="event.start === date.date && event.calendar_id != 'cal_WSTUlfV9On5fAAqa_Z8AL4WdDlIqAj4AGNwIsCQ' && event.calendar_id != 'cal_WSTUlfV9On5fAAqa_BtJVc75FrHDZNrEvB0Y0hQ'">
                        <div class="ca-app">
                            {{ event.summary }}
                        </div>
                        <div class="ca-time">
                            {{ event.time }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import * as calendarService from '../../services/calendarService'
    import Vue from 'vue'
    export default {
        data () {
            return {
                headline: {
                    title: 'KALENDER',
                    meta: 'calendar',
                    icon: 'android-calendar'
                },
                count: 0,
                dates: [
                    {
                        date: '2017-07-30'
                    }
                ],
                events: [
                            {
                                'calendar_id': 'cal_WSTUlfV9On5fAAqa_YuA7a3O4A3tsTO@e-aQMHA',
                                'event_uid': 'evt_external_5964a1e04f5f8ddfa9000004',
                                'summary': 'FERIE',
                                'description': '',
                                'start': '2017-07-30',
                                'end': '2017-08-06',
                                'deleted': false,
                                'created': '2017-07-11T10:01:04Z',
                                'updated': '2017-07-11T10:01:04Z',
                                'participation_status': 'accepted',
                                'attendees': [],
                                'organizer': null,
                                'transparency': 'transparent',
                                'status': 'confirmed',
                                'categories': [],
                                'recurring': false,
                                'options': {
                                    'delete': true,
                                    'update': true,
                                    'change_participation_status': false
                                }
                            },
                            {
                                'calendar_id': 'cal_WSTUlfV9On5fAAqa_Z8AL4WdDlIqAj4AGNwIsCQ',
                                'event_uid': 'evt_external_5924d6ec90ade024ee000165',
                                'summary': 'Software Construction',
                                'description': '',
                                'start': '2017-07-31T06:30:00Z',
                                'end': '2017-07-31T09:30:00Z',
                                'deleted': false,
                                'created': '2017-01-20T14:39:47Z',
                                'updated': '2017-07-19T08:26:28Z',
                                'location': {
                                    'description': 'Lygten 16 København NV, Danmark'
                                },
                                'participation_status': 'accepted',
                                'attendees': [],
                                'organizer': null,
                                'transparency': 'opaque',
                                'status': 'confirmed',
                                'categories': [],
                                'recurring': true,
                                'series_identifier': '9462d65af9ce48c95d2dad0c9e2062d5',
                                'options': {
                                    'delete': true,
                                    'update': false,
                                    'change_participation_status': false
                                }
                            },
                            {
                                'calendar_id': 'cal_WSTUlfV9On5fAAqa_Z8AL4WdDlIqAj4AGNwIsCQ',
                                'event_uid': 'evt_external_5924d6eb90ade024ee000142',
                                'summary': 'Technology',
                                'description': '',
                                'start': '2017-08-01T06:30:00Z',
                                'end': '2017-08-01T09:45:00Z',
                                'deleted': false,
                                'created': '2017-01-20T14:40:58Z',
                                'updated': '2017-07-19T08:26:27Z',
                                'location': {
                                    'description': 'Lygten 16 København NV, Danmark'
                                },
                                'participation_status': 'accepted',
                                'attendees': [],
                                'organizer': null,
                                'transparency': 'opaque',
                                'status': 'confirmed',
                                'categories': [],
                                'recurring': true,
                                'series_identifier': '21349777ba29cc95fdf3a7b39b256304',
                                'options': {
                                    'delete': true,
                                    'update': false,
                                    'change_participation_status': false
                                }
                            },
                            {
                                'calendar_id': 'cal_WSTUlfV9On5fAAqa_Z8AL4WdDlIqAj4AGNwIsCQ',
                                'event_uid': 'evt_external_5924d6ed90ade024ee000188',
                                'summary': 'Studie events',
                                'description': '',
                                'start': '2017-08-01T09:45:00Z',
                                'end': '2017-08-01T12:00:00Z',
                                'deleted': false,
                                'created': '2017-01-20T14:41:41Z',
                                'updated': '2017-07-19T08:26:30Z',
                                'location': {
                                    'description': 'Lygten 16 København NV, Danmark'
                                },
                                'participation_status': 'accepted',
                                'attendees': [],
                                'organizer': null,
                                'transparency': 'opaque',
                                'status': 'confirmed',
                                'categories': [],
                                'recurring': true,
                                'series_identifier': '478dade544592c0f83ba2a17e85452fa',
                                'options': {
                                    'delete': true,
                                    'update': false,
                                    'change_participation_status': false
                                }
                            },
                            {
                                'calendar_id': 'cal_WSTUlfV9On5fAAqa_Z8AL4WdDlIqAj4AGNwIsCQ',
                                'event_uid': 'evt_external_5924d6ef90ade024ee0001e9',
                                'summary': 'Software Construction',
                                'description': '',
                                'start': '2017-08-03T06:30:00Z',
                                'end': '2017-08-03T09:45:00Z',
                                'deleted': false,
                                'created': '2017-01-20T14:42:25Z',
                                'updated': '2017-07-19T08:26:29Z',
                                'location': {
                                    'description': 'Lygten 16 København NV, Danmark'
                                },
                                'participation_status': 'accepted',
                                'attendees': [],
                                'organizer': null,
                                'transparency': 'opaque',
                                'status': 'confirmed',
                                'categories': [],
                                'recurring': true,
                                'series_identifier': '3db854ee5bd8898cf683197722a9fdef',
                                'options': {
                                    'delete': true,
                                    'update': false,
                                    'change_participation_status': false
                                }
                            },
                            {
                                'calendar_id': 'cal_WSTUlfV9On5fAAqa_Z8AL4WdDlIqAj4AGNwIsCQ',
                                'event_uid': 'evt_external_5924d6ee90ade024ee0001c9',
                                'summary': 'ITO(Studie)',
                                'description': '',
                                'start': '2017-08-03T09:45:00Z',
                                'end': '2017-08-03T13:00:00Z',
                                'deleted': false,
                                'created': '2017-01-20T14:42:47Z',
                                'updated': '2017-07-19T08:26:32Z',
                                'location': {
                                    'description': 'Lygten 16\nKøbenhavn NV, Danmark'
                                },
                                'participation_status': 'accepted',
                                'attendees': [],
                                'organizer': null,
                                'transparency': 'opaque',
                                'status': 'confirmed',
                                'categories': [],
                                'recurring': true,
                                'series_identifier': '21c4dfab104a7c7bdc424efa2d06abca',
                                'options': {
                                    'delete': true,
                                    'update': false,
                                    'change_participation_status': false
                                }
                            },
                            {
                                'calendar_id': 'cal_WSTUlfV9On5fAAqa_Z8AL4WdDlIqAj4AGNwIsCQ',
                                'event_uid': 'evt_external_5924d6ee90ade024ee0001a9',
                                'summary': 'Software design',
                                'description': '',
                                'start': '2017-08-04T08:15:00Z',
                                'end': '2017-08-04T12:00:00Z',
                                'deleted': false,
                                'created': '2017-01-20T14:44:19Z',
                                'updated': '2017-07-19T08:26:31Z',
                                'location': {
                                    'description': 'Lygten 16 København NV, Danmark'
                                },
                                'participation_status': 'accepted',
                                'attendees': [],
                                'organizer': null,
                                'transparency': 'opaque',
                                'status': 'confirmed',
                                'categories': [],
                                'recurring': true,
                                'series_identifier': '1f79544bbb6ad760fc712e9ed61a48ff',
                                'options': {
                                    'delete': true,
                                    'update': false,
                                    'change_participation_status': false
                                }
                            },
                            {
                                'calendar_id': 'cal_WSTUlfV9On5fAAqa_YuA7a3O4A3tsTO@e-aQMHA',
                                'event_uid': 'evt_external_5964a1e14f5f8ddfa9000007',
                                'summary': 'Fly: LX 1953 fra BCN til ZRH',
                                'description': 'Bekræftelseskode: VTYQQ4\n\nKELLY / JASON MR\nBillet:  220‑2384364974',
                                'start': '2017-08-05T07:45:00Z',
                                'end': '2017-08-05T09:30:00Z',
                                'deleted': false,
                                'created': '2017-07-11T10:01:05Z',
                                'updated': '2017-07-11T10:01:05Z',
                                'location': {
                                    'description': 'BARCELONA ES AIRPORT '
                                },
                                'url': 'message://%3C38641-22017721193238502%40booking-lufthansa.com%3E?c=1499765558&k=%7CflightLX%5C%7CBCN%5C%7CZRH%5C%7C1953%5C%7CVTYQQ4',
                                'participation_status': 'accepted',
                                'attendees': [],
                                'organizer': null,
                                'transparency': 'opaque',
                                'status': 'confirmed',
                                'categories': [],
                                'recurring': false,
                                'options': {
                                    'delete': true,
                                    'update': true,
                                    'change_participation_status': false
                                }
                            },
                            {
                                'calendar_id': 'cal_WSTUlfV9On5fAAqa_BtJVc75FrHDZNrEvB0Y0hQ',
                                'event_uid': 'evt_external_596f258d4f793bc4af000005',
                                'summary': 'Fly: LX 1953 fra BCN til ZRH',
                                'description': 'Bekræftelseskode: VTYQQ4\n\nKELLY / JASON MR\nBillet:  220‑2384364974',
                                'start': '2017-08-05T07:45:00Z',
                                'end': '2017-08-05T09:30:00Z',
                                'deleted': false,
                                'created': '2017-07-19T09:25:33Z',
                                'updated': '2017-07-19T09:25:33Z',
                                'location': {
                                    'description': 'BARCELONA ES AIRPORT '
                                },
                                'url': 'message://%3C381127-22017721193238609%40booking-lufthansa.com%3E?c=1499765574&k=%7CflightLX%5C%7CBCN%5C%7CZRH%5C%7C1953%5C%7CVTYQQ4',
                                'participation_status': 'accepted',
                                'attendees': [],
                                'organizer': null,
                                'transparency': 'opaque',
                                'status': 'confirmed',
                                'categories': [],
                                'recurring': false,
                                'options': {
                                    'delete': true,
                                    'update': true,
                                    'change_participation_status': false
                                }
                            },
                            {
                                'calendar_id': 'cal_WSTUlfV9On5fAAqa_YuA7a3O4A3tsTO@e-aQMHA',
                                'event_uid': 'evt_external_5964a1e04f5f8ddfa9000005',
                                'summary': 'Fly: LX 1270 fra ZRH til CPH',
                                'description': 'Bekræftelseskode: VTYQQ4\n\nKELLY / JASON MR\nBillet:  220‑2384364974',
                                'start': '2017-08-05T10:20:00Z',
                                'end': '2017-08-05T12:05:00Z',
                                'deleted': false,
                                'created': '2017-07-11T10:01:04Z',
                                'updated': '2017-07-11T10:01:04Z',
                                'location': {
                                    'description': 'ZURICH CH ZURICH AIRPORT '
                                },
                                'url': 'message://%3C38641-22017721193238502%40booking-lufthansa.com%3E?c=1499765558&k=%7CflightLX%5C%7CZRH%5C%7CCPH%5C%7C1270%5C%7CVTYQQ4',
                                'participation_status': 'accepted',
                                'attendees': [],
                                'organizer': null,
                                'transparency': 'opaque',
                                'status': 'confirmed',
                                'categories': [],
                                'recurring': false,
                                'options': {
                                    'delete': true,
                                    'update': true,
                                    'change_participation_status': false
                                }
                            },
                            {
                                'calendar_id': 'cal_WSTUlfV9On5fAAqa_BtJVc75FrHDZNrEvB0Y0hQ',
                                'event_uid': 'evt_external_596f258d4f793bc4af000004',
                                'summary': 'Fly: LX 1270 fra ZRH til CPH',
                                'description': 'Bekræftelseskode: VTYQQ4\n\nKELLY / JASON MR\nBillet:  220‑2384364974',
                                'start': '2017-08-05T10:20:00Z',
                                'end': '2017-08-05T12:05:00Z',
                                'deleted': false,
                                'created': '2017-07-19T09:25:33Z',
                                'updated': '2017-07-19T09:25:33Z',
                                'location': {
                                    'description': 'ZURICH CH ZURICH AIRPORT '
                                },
                                'url': 'message://%3C381127-22017721193238609%40booking-lufthansa.com%3E?c=1499765574&k=%7CflightLX%5C%7CZRH%5C%7CCPH%5C%7C1270%5C%7CVTYQQ4',
                                'participation_status': 'accepted',
                                'attendees': [],
                                'organizer': null,
                                'transparency': 'opaque',
                                'status': 'confirmed',
                                'categories': [],
                                'recurring': false,
                                'options': {
                                    'delete': true,
                                    'update': true,
                                    'change_participation_status': false
                                }
                            },
                            {
                                'calendar_id': 'cal_WSTTdvYZxX-mAAmW_HmHV7ze11jhYWyt2@CHwNw',
                                'event_uid': 'evt_external_5924d37d204830d024000019',
                                'summary': 'RK - Telefonmøde (ugeplanlægning)',
                                'description': 'Vi skal have MINIMUM 3 ugentlige kontordage og MINIMUM 1 Skypemøde',
                                'start': '2017-08-06T18:00:00Z',
                                'end': '2017-08-06T19:00:00Z',
                                'deleted': false,
                                'created': '2016-08-21T17:41:05Z',
                                'updated': '2016-09-02T16:19:19Z',
                                'participation_status': 'accepted',
                                'attendees': [],
                                'organizer': {
                                    'email': 'ooqigcioadhlksj4nmesvfttqk@group.calendar.google.com',
                                    'display_name': 'Træning'
                                },
                                'transparency': 'opaque',
                                'status': 'confirmed',
                                'categories': [],
                                'recurring': true,
                                'series_identifier': '046f1950b102fd7fd0665434a6ff3943',
                                'options': {
                                    'delete': true,
                                    'update': false,
                                    'change_participation_status': false
                                }
                            },
                            {
                                'calendar_id': 'cal_WSTUlfV9On5fAAqa_rpQHNMKt6XqrW@FQt@PMWQ',
                                'event_uid': 'evt_external_5924d6ac90ade024ee00001e',
                                'summary': 'IKEA',
                                'description': '',
                                'start': '2017-08-07T06:30:00Z',
                                'end': '2017-08-07T17:00:00Z',
                                'deleted': false,
                                'created': '2017-03-07T10:54:40Z',
                                'updated': '2017-07-19T08:15:36Z',
                                'location': {
                                    'description': 'Mårkærvej 15\nTaastrup, Danmark'
                                },
                                'participation_status': 'accepted',
                                'attendees': [],
                                'organizer': null,
                                'transparency': 'opaque',
                                'status': 'confirmed',
                                'categories': [],
                                'recurring': true,
                                'series_identifier': '516e62a39ccce8408359698a9e2cc172',
                                'options': {
                                    'delete': true,
                                    'update': false,
                                    'change_participation_status': false
                                }
                            },
                            {
                                'calendar_id': 'cal_WSTUlfV9On5fAAqa_Z8AL4WdDlIqAj4AGNwIsCQ',
                                'event_uid': 'evt_external_5924d6ec90ade024ee000166',
                                'summary': 'Software Construction',
                                'description': '',
                                'start': '2017-08-07T06:30:00Z',
                                'end': '2017-08-07T09:30:00Z',
                                'deleted': false,
                                'created': '2017-01-20T14:39:47Z',
                                'updated': '2017-07-19T08:26:28Z',
                                'location': {
                                    'description': 'Lygten 16 København NV, Danmark'
                                },
                                'participation_status': 'accepted',
                                'attendees': [],
                                'organizer': null,
                                'transparency': 'opaque',
                                'status': 'confirmed',
                                'categories': [],
                                'recurring': true,
                                'series_identifier': '9462d65af9ce48c95d2dad0c9e2062d5',
                                'options': {
                                    'delete': true,
                                    'update': false,
                                    'change_participation_status': false
                                }
                            },
                            {
                                'calendar_id': 'cal_WSTUlfV9On5fAAqa_BtJVc75FrHDZNrEvB0Y0hQ',
                                'event_uid': 'evt_external_59678fd44f5f8d35ff000072',
                                'summary': 'Ses med Rathje',
                                'description': '',
                                'start': '2017-08-07T15:00:00Z',
                                'end': '2017-08-07T16:00:00Z',
                                'deleted': false,
                                'created': '2017-07-13T15:20:52Z',
                                'updated': '2017-07-13T15:20:52Z',
                                'participation_status': 'accepted',
                                'attendees': [],
                                'organizer': null,
                                'transparency': 'opaque',
                                'status': 'confirmed',
                                'categories': [],
                                'recurring': false,
                                'options': {
                                    'delete': true,
                                    'update': true,
                                    'change_participation_status': false
                                }
                            },
                            {
                                'calendar_id': 'cal_WSTUlfV9On5fAAqa_BtJVc75FrHDZNrEvB0Y0hQ',
                                'event_uid': 'evt_external_5924d6d290ade024ee0000c7',
                                'summary': 'Badminton',
                                'description': '',
                                'start': '2017-08-07T17:30:00Z',
                                'end': '2017-08-07T19:00:00Z',
                                'deleted': false,
                                'created': '2017-05-01T21:10:51Z',
                                'updated': '2017-07-19T08:26:05Z',
                                'location': {
                                    'description': 'Greve'
                                },
                                'participation_status': 'accepted',
                                'attendees': [],
                                'organizer': null,
                                'transparency': 'opaque',
                                'status': 'confirmed',
                                'categories': [],
                                'recurring': true,
                                'series_identifier': 'f91ff549d7cf541ae93ab5a6a25b4bb5',
                                'options': {
                                    'delete': true,
                                    'update': false,
                                    'change_participation_status': false
                                }
                            },
                            {
                                'calendar_id': 'cal_WSTUlfV9On5fAAqa_Z8AL4WdDlIqAj4AGNwIsCQ',
                                'event_uid': 'evt_external_5924d6eb90ade024ee000143',
                                'summary': 'Technology',
                                'description': '',
                                'start': '2017-08-08T06:30:00Z',
                                'end': '2017-08-08T09:45:00Z',
                                'deleted': false,
                                'created': '2017-01-20T14:40:58Z',
                                'updated': '2017-07-19T08:26:27Z',
                                'location': {
                                    'description': 'Lygten 16 København NV, Danmark'
                                },
                                'participation_status': 'accepted',
                                'attendees': [],
                                'organizer': null,
                                'transparency': 'opaque',
                                'status': 'confirmed',
                                'categories': [],
                                'recurring': true,
                                'series_identifier': '21349777ba29cc95fdf3a7b39b256304',
                                'options': {
                                    'delete': true,
                                    'update': false,
                                    'change_participation_status': false
                                }
                            },
                            {
                                'calendar_id': 'cal_WSTUlfV9On5fAAqa_Z8AL4WdDlIqAj4AGNwIsCQ',
                                'event_uid': 'evt_external_59647d731659a14273000007',
                                'summary': 'Læge',
                                'description': '',
                                'start': '2017-08-08T07:45:00Z',
                                'end': '2017-08-08T08:45:00Z',
                                'deleted': false,
                                'created': '2017-07-11T07:25:39Z',
                                'updated': '2017-07-15T08:26:26Z',
                                'participation_status': 'accepted',
                                'attendees': [],
                                'organizer': null,
                                'transparency': 'opaque',
                                'status': 'confirmed',
                                'categories': [],
                                'recurring': false,
                                'options': {
                                    'delete': true,
                                    'update': true,
                                    'change_participation_status': false
                                }
                            },
                            {
                                'calendar_id': 'cal_WSTUlfV9On5fAAqa_YuA7a3O4A3tsTO@e-aQMHA',
                                'event_uid': 'evt_external_596740134f5f8d6925000006',
                                'summary': 'DSRack opfølgning',
                                'description': '',
                                'start': '2017-08-08T09:00:00Z',
                                'end': '2017-08-08T10:00:00Z',
                                'deleted': false,
                                'created': '2017-07-13T09:40:35Z',
                                'updated': '2017-07-13T09:40:35Z',
                                'participation_status': 'accepted',
                                'attendees': [],
                                'organizer': null,
                                'transparency': 'opaque',
                                'status': 'confirmed',
                                'categories': [],
                                'recurring': false,
                                'options': {
                                    'delete': true,
                                    'update': true,
                                    'change_participation_status': false
                                }
                            },
                            {
                                'calendar_id': 'cal_WSTUlfV9On5fAAqa_Z8AL4WdDlIqAj4AGNwIsCQ',
                                'event_uid': 'evt_external_5924d6ed90ade024ee000189',
                                'summary': 'Studie events',
                                'description': '',
                                'start': '2017-08-08T09:45:00Z',
                                'end': '2017-08-08T12:00:00Z',
                                'deleted': false,
                                'created': '2017-01-20T14:41:41Z',
                                'updated': '2017-07-19T08:26:30Z',
                                'location': {
                                    'description': 'Lygten 16 København NV, Danmark'
                                },
                                'participation_status': 'accepted',
                                'attendees': [],
                                'organizer': null,
                                'transparency': 'opaque',
                                'status': 'confirmed',
                                'categories': [],
                                'recurring': true,
                                'series_identifier': '478dade544592c0f83ba2a17e85452fa',
                                'options': {
                                    'delete': true,
                                    'update': false,
                                    'change_participation_status': false
                                }
                            },
                            {
                                'calendar_id': 'cal_WSTUlfV9On5fAAqa_YuA7a3O4A3tsTO@e-aQMHA',
                                'event_uid': 'evt_external_5924d6dc90ade024ee000100',
                                'summary': 'Ugentligt statusmøde',
                                'description': '',
                                'start': '2017-08-08T10:00:00Z',
                                'end': '2017-08-08T13:00:00Z',
                                'deleted': false,
                                'created': '2017-03-07T10:53:32Z',
                                'updated': '2017-07-18T12:30:33Z',
                                'location': {
                                    'description': 'KEA'
                                },
                                'participation_status': 'accepted',
                                'attendees': [],
                                'organizer': null,
                                'transparency': 'opaque',
                                'status': 'confirmed',
                                'categories': [],
                                'recurring': true,
                                'series_identifier': 'a60e3cf1a18ceb8495390fcc65349aa5',
                                'options': {
                                    'delete': true,
                                    'update': false,
                                    'change_participation_status': false
                                }
                            },
                            {
                                'calendar_id': 'cal_WSTUlfV9On5fAAqa_uzdUSINGHPVjljTzvNtg9g',
                                'event_uid': 'evt_external_5924d6bc90ade024ee000068',
                                'summary': 'Kontor',
                                'description': '',
                                'start': '2017-08-08T13:00:00Z',
                                'end': '2017-08-08T18:00:00Z',
                                'deleted': false,
                                'created': '2017-03-04T18:51:53Z',
                                'updated': '2017-07-18T12:35:31Z',
                                'location': {
                                    'description': 'Saltværksvej 2\nKastrup, Danmark'
                                },
                                'participation_status': 'accepted',
                                'attendees': [],
                                'organizer': null,
                                'transparency': 'opaque',
                                'status': 'confirmed',
                                'categories': [],
                                'recurring': true,
                                'series_identifier': '9766c16d4cda9048a3420e92b77a75db',
                                'options': {
                                    'delete': true,
                                    'update': false,
                                    'change_participation_status': false
                                }
                            },
                            {
                                'calendar_id': 'cal_WSTUlfV9On5fAAqa_YuA7a3O4A3tsTO@e-aQMHA',
                                'event_uid': 'evt_external_5924d6dc90ade024ee000120',
                                'summary': 'NR - Lav blogindlæg til deveo web, LinkedIn, Facebook mv.',
                                'description': '',
                                'start': '2017-08-08T18:00:00Z',
                                'end': '2017-08-08T20:00:00Z',
                                'deleted': false,
                                'created': '2017-01-05T16:48:19Z',
                                'updated': '2017-07-18T12:30:31Z',
                                'location': {
                                    'description': 'Emne: Ukendt'
                                },
                                'participation_status': 'accepted',
                                'attendees': [],
                                'organizer': null,
                                'transparency': 'opaque',
                                'status': 'confirmed',
                                'categories': [],
                                'recurring': true,
                                'series_identifier': 'b0f903e02ebb91821126728d94bde5eb',
                                'options': {
                                    'delete': true,
                                    'update': false,
                                    'change_participation_status': false
                                }
                            },
                            {
                                'calendar_id': 'cal_WSTUlfV9On5fAAqa_rpQHNMKt6XqrW@FQt@PMWQ',
                                'event_uid': 'evt_external_5924d6ad90ade024ee000039',
                                'summary': 'IKEA',
                                'description': '',
                                'start': '2017-08-09T09:00:00Z',
                                'end': '2017-08-09T14:00:00Z',
                                'deleted': false,
                                'created': '2017-03-07T10:55:20Z',
                                'updated': '2017-07-19T08:15:34Z',
                                'location': {
                                    'description': 'Mårkærvej 15\nTaastrup, Danmark'
                                },
                                'participation_status': 'accepted',
                                'attendees': [],
                                'organizer': null,
                                'transparency': 'opaque',
                                'status': 'confirmed',
                                'categories': [],
                                'recurring': true,
                                'series_identifier': 'a736bfcf505b2d00063c01907de032d0',
                                'options': {
                                    'delete': true,
                                    'update': false,
                                    'change_participation_status': false
                                }
                            },
                            {
                                'calendar_id': 'cal_WSTUlfV9On5fAAqa_YuA7a3O4A3tsTO@e-aQMHA',
                                'event_uid': 'evt_external_596dff6a4f793b712200001c',
                                'summary': 'VW netværksmøde',
                                'description': '',
                                'start': '2017-08-10T04:30:00Z',
                                'end': '2017-08-10T06:00:00Z',
                                'deleted': false,
                                'created': '2017-07-18T12:30:34Z',
                                'updated': '2017-07-18T12:30:34Z',
                                'location': {
                                    'description': 'VW Amager'
                                },
                                'participation_status': 'accepted',
                                'attendees': [],
                                'organizer': null,
                                'transparency': 'opaque',
                                'status': 'confirmed',
                                'categories': [],
                                'recurring': false,
                                'options': {
                                    'delete': true,
                                    'update': true,
                                    'change_participation_status': false
                                }
                            },
                            {
                                'calendar_id': 'cal_WSTUlfV9On5fAAqa_Z8AL4WdDlIqAj4AGNwIsCQ',
                                'event_uid': 'evt_external_5924d6ef90ade024ee0001ea',
                                'summary': 'Software Construction',
                                'description': '',
                                'start': '2017-08-10T06:30:00Z',
                                'end': '2017-08-10T09:45:00Z',
                                'deleted': false,
                                'created': '2017-01-20T14:42:25Z',
                                'updated': '2017-07-19T08:26:29Z',
                                'location': {
                                    'description': 'Lygten 16 København NV, Danmark'
                                },
                                'participation_status': 'accepted',
                                'attendees': [],
                                'organizer': null,
                                'transparency': 'opaque',
                                'status': 'confirmed',
                                'categories': [],
                                'recurring': true,
                                'series_identifier': '3db854ee5bd8898cf683197722a9fdef',
                                'options': {
                                    'delete': true,
                                    'update': false,
                                    'change_participation_status': false
                                }
                            },
                            {
                                'calendar_id': 'cal_WSTUlfV9On5fAAqa_Z8AL4WdDlIqAj4AGNwIsCQ',
                                'event_uid': 'evt_external_5924d6ee90ade024ee0001ca',
                                'summary': 'ITO(Studie)',
                                'description': '',
                                'start': '2017-08-10T09:45:00Z',
                                'end': '2017-08-10T13:00:00Z',
                                'deleted': false,
                                'created': '2017-01-20T14:42:47Z',
                                'updated': '2017-07-19T08:26:32Z',
                                'location': {
                                    'description': 'Lygten 16\nKøbenhavn NV, Danmark'
                                },
                                'participation_status': 'accepted',
                                'attendees': [],
                                'organizer': null,
                                'transparency': 'opaque',
                                'status': 'confirmed',
                                'categories': [],
                                'recurring': true,
                                'series_identifier': '21c4dfab104a7c7bdc424efa2d06abca',
                                'options': {
                                    'delete': true,
                                    'update': false,
                                    'change_participation_status': false
                                }
                            },
                            {
                                'calendar_id': 'cal_WSTUlfV9On5fAAqa_Z8AL4WdDlIqAj4AGNwIsCQ',
                                'event_uid': 'evt_external_5924d6ee90ade024ee0001aa',
                                'summary': 'Software design',
                                'description': '',
                                'start': '2017-08-11T08:15:00Z',
                                'end': '2017-08-11T12:00:00Z',
                                'deleted': false,
                                'created': '2017-01-20T14:44:19Z',
                                'updated': '2017-07-19T08:26:31Z',
                                'location': {
                                    'description': 'Lygten 16 København NV, Danmark'
                                },
                                'participation_status': 'accepted',
                                'attendees': [],
                                'organizer': null,
                                'transparency': 'opaque',
                                'status': 'confirmed',
                                'categories': [],
                                'recurring': true,
                                'series_identifier': '1f79544bbb6ad760fc712e9ed61a48ff',
                                'options': {
                                    'delete': true,
                                    'update': false,
                                    'change_participation_status': false
                                }
                            },
                    {
                        'calendar_id': 'cal_WSTTdvYZxX-mAAmW_HmHV7ze11jhYWyt2@CHwNw',
                        'event_uid': 'evt_external_5924d37d204830d02400001a',
                        'summary': 'RK - Telefonmøde (ugeplanlægning)',
                        'description': 'Vi skal have MINIMUM 3 ugentlige kontordage og MINIMUM 1 Skypemøde',
                        'start': '2017-08-13T18:00:00Z',
                        'end': '2017-08-13T19:00:00Z',
                        'deleted': false,
                        'created': '2016-08-21T17:41:05Z',
                        'updated': '2016-09-02T16:19:19Z',
                        'participation_status': 'accepted',
                        'attendees': [],
                        'organizer': {
                            'email': 'ooqigcioadhlksj4nmesvfttqk@group.calendar.google.com',
                            'display_name': 'Træning'
                        },
                        'transparency': 'opaque',
                        'status': 'confirmed',
                        'categories': [],
                        'recurring': true,
                        'series_identifier': '046f1950b102fd7fd0665434a6ff3943',
                        'options': {
                            'delete': true,
                            'update': false,
                            'change_participation_status': false
                        }
                    }
                ]
            }
        },
        created () {
            // this.getEvents()
            this.setDates()
        },
        computed: {
            startDate: function () {
                let today = new Date()
                return Vue.moment(today).format('YYYY-MM-DD')
            },
            endDate: function () {
                let today = new Date()
                let enddate = today.setDate(today.getDate() + 1)
                return Vue.moment(enddate).format('YYYY-MM-DD')
            },
            filteredEvents: function () {
                return this.events.filter(function (event) {
                    event.time = event.start.slice(11, 13) + '.' + event.start.slice(14, 16)
                    event.start = event.start.slice(0, 10)
                    if (event.time === '.') {
                        // event.time = 'hele dagen'
                        // return event
                        return
                    } else {
                        return event
                    }
                })
            }
        },
        methods: {
            getEvents () {
                calendarService.get({}, (response) => {
                    this.events = response.data
                }, (error) => {
                    alert('fejlen er: ' + error)
                })
            },
            setDates () {
                let now = new Date()
                let newDate = ''
                if (this.count === 0) {
                    newDate = now.setDate(now.getDate())
                } else {
                    newDate = now.setDate(now.getDate() + this.count)
                }
                    let formatted = Vue.moment(newDate).format('YYYY-MM-DD')
                if (this.count < 28) {
                    this.count = this.count + 1
                    this.dates.push({date: formatted})
                } else {
                    return
                }
                this.setDates()
            }
        }
    }
</script>
