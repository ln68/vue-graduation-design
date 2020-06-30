import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/example01",
    component: () => import("@/views/example01/Example01.vue")
  },
  {
    path: "/example02",
    component: () => import("@/views/example02/Example02.vue")
  },
  {
    props: true,
    path: "/example03/students/:sid/homework/:hid",
    component: () => import("@/views/example03/Example03.vue")
  },
  {
    path: "/example04",
    component: () => import("@/views/example04/Example04-01.vue")
  },
  {
    path: "/Teacher",
    component: () => import("@/views/Teacher.vue")
  },
  {
    path: "/Student",
    component: () => import("@/views/Student.vue")
  },
  {
    path: "/Course",
    component: () => import("@/views/Course.vue")
  },
  {
    path: "/Direction",
    component: () => import("@/views/Direction.vue")
  },
  {
    path: "/Amount",
    component: () => import("@/views/Amount.vue")
  },
  {
    path: "/Achieve",
    component: () => import("@/views/Achieve.vue")
  },
  {
    path: "/example04/Example04-02.vue",
    component: () => import("@/views/example04/Example04-02.vue")
  },
  {
    path: "/example04/Example04-03.vue",
    component: () => import("@/views/example04/Example04-03.vue")
  },
  {
    path: "/example05",
    component: () => import("@/views/example05/Example05-01.vue")
  },
  {
    path: "/example05/Example05-02.vue",
    component: () => import("@/views/example05/Example05-02.vue")
  },
  {
    path: "/example06",
    component: () => import("@/views/example06/Example06-01.vue")
  },
  {
    path: "/example06/Example06-02.vue",
    component: () => import("@/views/example06/Example06-02.vue")
  },
  {
    path: "/example06/Example06-03.vue",
    component: () => import("@/views/example06/Example06-03.vue")
  },
  {
    path: "/example07",
    component: () => import("@/views/example07/Example07-01.vue")
  },
  {
    props: true,
    path: "/homeworks",
    component: () => import("@/views/example07/Example07-02.vue")
  },
  {
    props: true,
    path: "/homeworks/:hid",
    component: () => import("@/views/example07/Example07-03.vue")
  },
  {
    props: true,
    path: "/example08",
    component: () => import("@/views/example08/Example08-01.vue")
  },
  {
    props: true,
    path: "/example09",
    component: () => import("@/views/example09/Example09-01.vue")
  },
  {
    props: true,
    path: "/example10",
    component: () => import("@/views/example10/Example10-01.vue"),
    children: [
      {
        props: true,
        path: "homeworks/:hid",
        component: () => import("@/views/example10/Homework.vue")
      }
    ]
  },
  {
    props: true,
    path: "/example11",
    component: () => import("@/views/example11/Example11-01.vue")
  },
  {
    props: true,
    path: "/example12",
    component: () => import("@/views/example12/Example12-01.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
